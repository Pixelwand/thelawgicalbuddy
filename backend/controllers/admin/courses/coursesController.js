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
       
        const updatedData = {
            title: req.body.title || course.title,
            description: req.body.description || course.description,
            price: req.body.price || course.price,
            instructor:req.body.instructor || course.instructor,
            qualifications: req.body.qualifications || course.qualifications,
            experience: req.body.experience || course.experience,


        }
         const course = await Courses.findByIdAndUpdate(req.params.id, updatedData);
        res.status(200).json({
            status: 'success',
            message: 'Data updated successfully',
            data: {
                course
            }
        })
            }
     catch (err) { 
        res.status(501).json({
          status: 'failed',
          message: 'Internal server error',
        });
    }
}


exports.deleteCourse = async (req, res) => {
    try {
        const course = await Courses.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'success',
            message: 'Course deleted successfully',
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