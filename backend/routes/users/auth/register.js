const express = require('express');
const bodyParser = require('body-parser');
const registerController = require('../../../controllers/users/authController')

const app = express.Router();
const urlEncodedBody = bodyParser.urlencoded({ extended: false });

app.post('/register', urlEncodedBody, registerController.registerUser)

module.exports = app;
