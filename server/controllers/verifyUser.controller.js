//receive cookie from client and authenticate it and return user data
const express = require('express');
var cookieParser = require('cookie-parser')
const cookieAuthenticatorRouter = express.Router();
const verifyToken = require('../utils/verifyToken.utils');

cookieAuthenticatorRouter.use(cookieParser());

cookieAuthenticatorRouter.get('/', (req, res) => {
    const cookieValue = req.cookies.livechatusercookie;
    if (cookieValue) {
        const {token} = cookieValue;
        const decoded = verifyToken(token, process.env.JWT_SECRET);
        if (decoded) {
            return res.json({decoded});
        } else {
            res.send('Token not valid');
        }
    } else {
        res.send('Cookie not found');
    }
});

module.exports = cookieAuthenticatorRouter;