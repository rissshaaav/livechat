const express = require('express');
const loginController = require('../controllers/login.controller');
const signupController = require('../controllers/signup.controller');
var cookieParser = require('cookie-parser')

const verifyUser = require('../controllers/verifyUser.controller');

const userRouter = express.Router();
userRouter.use(cookieParser());

userRouter.post('/login', loginController);
userRouter.post('/signup', signupController);
userRouter.get('/verifyUser', verifyUser);


module.exports = userRouter;