const express = require('express');
//Imported express router
const app = express.Router();
//Imported adminAuthController
const adminAuthController = require('./../../../controllers/admin/auth/authAdmin');
//Imported body-parser for parsing the request body
const bodyParser = require('body-parser');

const urlEncodedParse = bodyParser.urlencoded({ extended: false });

app.post('/register', adminAuthController.createAdmin);


module.exports = app;
