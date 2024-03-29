const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    number: {
        type: Number,
        required: true,
        trim: true,
    },
    password: {
        type: String,   
        required: true,
        trim: true,
    },
    checkBox: {
        type: Boolean,
        required: true,
        trim: true,
    }
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;