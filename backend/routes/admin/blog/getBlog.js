const express = require('express');
const blogController = require('../../../controllers/admin/blog/blogController');

const app = express.Router();


app.get('/get/:id', blogController.findBlogById);
app.get('/get/:name', blogController.findBlogByName);

module.exports = app;