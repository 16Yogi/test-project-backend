let { Router } = require('express');
let validations = require('./validations');
let controllers = require('./controllers');
const { fileUploader } = require('../helpers');
let auth = require('../auth');
let router = Router();

router.post(
  '/register',
  fileUploader.fields([{ name: 'photo', maxCount: 1 }]),
  validations.register,
  controllers.register
);
router.post('/login', validations.login, controllers.login);
router.get(
  '/check-login',
  auth.authorize,
  validations.checkLogin,
  controllers.checkLogin
);

router.get(
  '/profile',
  auth.authorize,
  validations.profile,
  controllers.profile
);

module.exports = router;
