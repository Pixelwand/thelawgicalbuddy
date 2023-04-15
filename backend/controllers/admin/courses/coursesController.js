const Courses = require('../../../models/admin/coursesModel');

exports.addCourse = async (req, res) => {
    try {
        const course = await Courses.create(req.body);
        res.status(201).json({
            status: 'success',
            message: 'Course added successfully',
            data: {
                course
            }
        })
    } catch (err) {
        res.status(501).json({
            status: 'failed',
            message:'Internal server error'
        })
    }

}


exports.getCourse = async (req, res) => {
    try {
        const course = await Courses.find();
        res.status(200).json({
            status: 'success',
            message: 'Data fetched successfully',
            data: {
                course
            }
        })
    } catch(err) {
        res.status(501).json({
            status: 'failed',
            message:'Internal server error'
                })
            }
}

exports.updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = 

exports.deleteCourse = async (req, res) => {
    
}