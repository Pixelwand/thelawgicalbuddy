const express = require('express');
const getCourseController = require('../../../controllers/admin/courses/coursesController');

const app = express.Router();

app.get('/', getCourseController.addCourse);

module.exports = app;