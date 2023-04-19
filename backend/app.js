const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

//imported environment variable files
require("dotenv").config({ path: "config.env" });

//Imported Admin register and login routes
const adminRegisterRoutes = require('./routes/admin/auth/register');
const adminLoginRoutes = require('./routes/admin/auth/login');

//Imported Users register and login routes
const registerRoutes = require('./routes/users/auth/register');
const loginRoutes = require('./routes/users/auth/login');

//Imported Courses routes 
const addCourseRoutes = require('./routes/admin/courses/addCourses');
const getCourseRoutes = require('./routes/admin/courses/getCourses');
const updateCourseRoutes = require('./routes/admin/courses/updateCourses');
const deleteCourseRoutes = require('./routes/admin/courses/deleteCourses');

//Imported blog routes
const addBlogRoutes = require('./routes/admin/blog/addBlog');
const getBlogRoutes = require('./routes/admin/blog/getBlog');
const updateBlogRoutes = require('./routes/admin/blog/updateBlog');
const deleteBlogRoutes = require('./routes/admin/blog/deleteBlog');

//Importing user profile routes
const userProfileRoutes = require('./routes/admin/users/userProfile');
 
//starting the server
const app = express(); 
const port = process.env.PORT || 8080;
const db = process.env.DB;
console.log(port);

//connected to MongoDB database
mongoose.connect(db, {
    useNewUrlParser:true
}).then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.log(`${err}`);
})

//Add middleware
app.use(cors())
app.use(express.json( ))

//userRoutes middleware
app.use('/user', registerRoutes);
app.use('/user', loginRoutes);

//adminRoutes middleware
app.use('/admin', adminRegisterRoutes);
app.use('/admin', adminLoginRoutes);

//courseRoutes middleware
app.use('/course', addCourseRoutes);
app.use('/course', getCourseRoutes);
app.use('/course', updateCourseRoutes);
app.use('/course', deleteCourseRoutes);

//blogRoutes middleware
app.use('/blog', addBlogRoutes);
app.use('/blog', getBlogRoutes);
app.use('/blog', updateBlogRoutes);
app.use('/blog', deleteBlogRoutes);

//userProfileRoutes middleware
app.use('/user', userProfileRoutes)

//Listening to port
app.listen(port, () => {
    console.log(`PORT is running on ${port}`)
})

module.exports = app;