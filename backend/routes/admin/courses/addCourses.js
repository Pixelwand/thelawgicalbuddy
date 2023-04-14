const express = require('express');
const bodyParser = require('body-parser');
const addCourseController = require('../../../controllers/admin/courses/coursesController');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();

app.post('/add', addCourseController.addCourse);

module.exports = app;

