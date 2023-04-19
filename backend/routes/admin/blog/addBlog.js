const express = require('express');
const bodyParser = require('body-parser');
const blogController = require('../../../controllers/admin/blog/blogController');


const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.post('/add', urlEncodedParser, blogController.createBlog);

module.exports = app;