let jwt = require('jsonwebtoken');
let stores = require('../stores');

let helpers = require('./helpers');
const { User } = require('./users/models');

async function authorize(req, res, next) {
  try {
    const authorization = req.headers.authorization;
    const db = stores.db;

    if (!authorization) {
      return res.status(404).json({ message: 'authorization is required' });
    }

    if (!authorization.startsWith('Bearer ')) {
      return res.status(404).json({ message: 'authorization must be bearer' });
    }

    const token = authorization.split(' ')[1];

    const { email, hash } = jwt.verify(token, process.env.SECRET_KEY);

    let user = await User.findOne({
      email,
      password: hash,
    });

    if (!user) {
      return res.status(404).json({ message: 'authorization failed' });
    }

    res.locals.user = user;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'authorization failed' });
  }
}

module.exports = {
  authorize,
};
