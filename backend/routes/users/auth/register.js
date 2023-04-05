const express = require('express');
const bodyParser = require('body-parser');
const registerController = require('../../../controllers/users/authController')

const app = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post('/register', urlEncodedParser, registerController.registerUser)

module.exports = app;
