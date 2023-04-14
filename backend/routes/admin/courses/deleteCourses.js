const express = require('express');

const deleteCourseController = require('../../../controllers/admin/courses/coursesController');

const app = express.Router();

app.delete('/', deleteCourseController.deleteCourse);

module.exports = app;