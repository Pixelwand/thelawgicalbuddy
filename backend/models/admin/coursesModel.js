const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    instructor: {
        type: String,
        required: true,
        trim: true
    },
    qualifications: {
        type: String,
        required: true,
        trim:true
    },
    experience: {
        type: String,
        required: true,
        trim:true
    },
    // isFree: {
    //     type: Boolean,
    //     required: true,
    //     trim:true
    // }
    
})

const Courses = mongoose.model("courses", courseSchema)

module.exports = Courses;