const express = require('express');
const bodyParser = require('body-parser');
const userProfileController = require('../../../controllers/admin/user/userProfileController');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.get('/get', userProfileController.getUsers);
app.get('/get/:id', userProfileController.getUserById);
app.post('/add', urlEncodedParser, userProfileController.createUser);
app.patch('/update/:id', urlEncodedParser, userProfileController.updateUser);
app.delete('/delete/:id', urlEncodedParser, userProfileController.deleteUser);


module.exports = app;
