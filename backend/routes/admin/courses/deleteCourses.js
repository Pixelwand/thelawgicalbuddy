const express = require('express');

const deleteCourseController = require('../../../controllers/admin/courses/coursesController');

const app = express.Router();

app.delete('/delete/:id', deleteCourseController.deleteCourse);

module.exports = app;