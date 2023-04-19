const express = require('express');
const bodyParser = require('body-parser');
const blogController = require('../../../controllers/admin/blog/blogController');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.get('/get/:id', urlEncodedParser, blogController.updateBlog);

module.exports = app;
