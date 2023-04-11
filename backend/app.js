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


//Listening to port
app.listen(port, () => {
    console.log(`PORT is running on ${port}`)
})

module.exports = app;