const express = require('express');
const loginController = require('../controllers/login.controller');
const signupController = require('../controllers/signup.controller');

const userRouter = express.Router();

userRouter.post('/login', loginController);
userRouter.post('/signup', signupController);

module.exports = userRouter;