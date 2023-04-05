const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./../../../controllers/users/authController')

const app = express.Router();
const urlEncodedBody = bodyParser.urlencoded({ extended: false });
app.post('/login', urlEncodedBody, loginController.loginUser);

module.exports = app;
