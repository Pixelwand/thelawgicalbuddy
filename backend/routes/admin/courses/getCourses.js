const express = require('express');
const getCourseController = require('../../../controllers/admin/courses/coursesController');

const app = express.Router();

app.get('/get', getCourseController.getCourse);

module.exports = app;