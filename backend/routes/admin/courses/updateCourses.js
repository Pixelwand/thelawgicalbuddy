const express = require('express');

const bodyParser = require('body-parser');
const updateCourseController = require('../../../controllers/admin/courses/coursesController');

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

const app = express.Router();


app.post('/update', updateCourseController.updateCourse);

module.exports = app;