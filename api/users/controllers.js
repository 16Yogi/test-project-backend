let jwt = require('jsonwebtoken');
let helpers = require('../helpers');
let stores = require('../../stores');

// const { deleteFile } = require("../helpers");
function put(req, res) {
  // deleteFile(req.files.flower[0]);
  return res.json({ body: req.body });
}

async function register(req, res) {
  try {
    let {
      name,
      email,
      qualification,
      address,
      district,
      training,
      course,
      phone,
      password,
      city,
      pincode,
      dob,
      gender,
      country,
      state,
      branch,
    } = req.body;

    let db = stores.db;

    let user = await db.collection('users').findOne({
      email,
    });

    if (user) {
      return res.status(400).json({ message: 'email alredy exist' });
    }

    let result = await db.collection('users').insertOne({
      name,
      email,
      qualification,
      address,
      district,
      training,
      course,
      phone,
      city,
      pincode,
      dob,
      gender,
      country,
      state,
      branch,
      photo: req.files.photo?.[0]?.filename,
      password: helpers.createSaltedHash(password),
      createdAt: new Date(),
    });

    if (!result.acknowledged) {
      return res.status(500).json({ message: 'database error' });
    }

    return res.json({
      message: 'user added successfully',
      _id: result.insertedId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'server error' });
  }
}

async function login(req, res) {
  try {
    let { email, password } = req.body;
    let db = stores.db;

    let user = await db.collection('users').findOne({
      email,
      password: helpers.createSaltedHash(password),
    });

    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    let token = jwt.sign(
      { email, hash: helpers.createSaltedHash(password) },
      process.env.SECRET_KEY
    );

    return res.json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'server error' });
  }
}

async function checkLogin(req, res) {
  try {
    return res.json({
      message: 'login successfully',
      user: res.locals.user,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: 'server error' });
  }
}

async function profile(req, res) {
  try {
    const user = res.locals.user;

    delete user.password;

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(505).json({ message: 'server error' });
  }
}

module.exports = {
  put,
  login,
  checkLogin,
  register,
  profile,
};
