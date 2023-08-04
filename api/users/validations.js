function register(req, res, next) {
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

  if (!name) {
    return res.status(404).json({ message: 'name is  required' });
  }

  if (typeof name !== 'string') {
    return res.status(404).json({ message: 'name must be string' });
  }

  if (!email) {
    return res.status(404).json({ message: 'email is required' });
  }

  if (
    !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    )
  ) {
    return res.status(404).json({ message: 'Please enter valid email!' });
  }

  if (!qualification) {
    return res.status(404).json({ message: 'qualification is  required' });
  }

  if (typeof qualification !== 'string') {
    return res.status(404).json({ message: 'qualification must be string' });
  }

  if (!address) {
    return res.status(404).json({ message: 'address is  required' });
  }

  if (typeof address !== 'string') {
    return res.status(404).json({ message: 'address must be string' });
  }

  if (!district) {
    return res.status(404).json({ message: 'district is  required' });
  }

  if (typeof district !== 'string') {
    return res.status(404).json({ message: 'district must be string' });
  }

  if (training && typeof training !== 'string') {
    return res.status(404).json({ message: 'training must be string' });
  }

  if (!course) {
    return res.status(404).json({ message: 'course is  required' });
  }

  if (typeof course !== 'string') {
    return res.status(404).json({ message: 'course must be string' });
  }

  if (!phone) {
    return res.status(404).json({ message: 'phone is  required' });
  }

  if (typeof phone !== 'string') {
    return res.status(404).json({ message: 'phone must be string' });
  }

  if (phone) {
    if (!/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)) {
      return res
        .status(404)
        .json({ message: 'please enter valid phone number' });
    }
  }

  if (!password) {
    return res.status(404).json({ message: 'password is  required' });
  }

  if (typeof password !== 'string') {
    return res.status(404).json({ message: 'password must be string' });
  }

  if (password.length < 3) {
    message = 'password is too short';
    return res.status(404).json({ message: 'password is too short' });
  }

  if (!city) {
    return res.status(404).json({ message: 'city is  required' });
  }

  if (typeof city !== 'string') {
    return res.status(404).json({ message: 'city must be string' });
  }

  if (!pincode) {
    return res.status(404).json({ message: 'pincode is  required' });
  }

  if (typeof pincode !== 'string') {
    return res.status(404).json({ message: 'pincode must be string' });
  }

  if (!dob) {
    return res.status(404).json({ message: 'dob is  required' });
  }

  if (typeof dob !== 'string') {
    return res.status(404).json({ message: 'dob must be string' });
  }

  if (!gender) {
    return res.status(404).json({ message: 'gender is  required' });
  }

  if (typeof gender !== 'string') {
    return res.status(404).json({ message: 'gender must be string' });
  }

  if (!country) {
    return res.status(404).json({ message: 'country is  required' });
  }

  if (typeof country !== 'string') {
    return res.status(404).json({ message: 'country must be string' });
  }

  if (!state) {
    return res.status(404).json({ message: 'state is  required' });
  }

  if (typeof state !== 'string') {
    return res.status(404).json({ message: 'state must be string' });
  }

  if (!branch) {
    return res.status(404).json({ message: 'branch is  required' });
  }

  if (typeof branch !== 'string') {
    return res.status(404).json({ message: 'branch must be string' });
  }

  return next();
}

function login(req, res, next) {
  let { email, password } = req.body;

  if (!email) {
    return res.json(404).json({ message: 'email is required' });
  }

  if (
    !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    )
  ) {
    return res.json(404).json({ message: 'Please enter valid email!' });
  }

  if (!password) {
    return res.json(404).json({ message: 'password is  required' });
  }

  if (typeof password !== 'string') {
    return res.json(404).json({ message: 'password must be string' });
  }

  if (password.length < 3) {
    message = 'password is too short';
    return res.json(404).json({ message: 'password is too short' });
  }

  return next();
}

function put(req, res, next) {
  return next();
}

function profile(req, res, next) {
  return next();
}

function checkLogin(req, res, next) {
  return next();
}

module.exports = {
  register,
  login,
  put,
  profile,
  checkLogin,
};
