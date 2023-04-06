const express = require('express');
const bodyParser = require('body-parser');
const loginController = require('./../../../controllers/users/authController')

const app = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.post('/login', urlEncodedParser, loginController.loginUser);

module.exports = app;
