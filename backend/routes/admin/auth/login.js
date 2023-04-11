const express = require('express');

const loginAuthController = require('./../../../controllers/admin/auth/authAdmin');
const bodyParser = require('body-parser');
const app = express.Router();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.post('/login', urlEncodedParser, loginAuthController.loginAdmin);


module.exports = app;