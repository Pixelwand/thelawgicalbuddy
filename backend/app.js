const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:"config.env"});

//starting the app
const app = express();

//server running 
const port = 8080 || process.env.PORT;

//database details
const db = process.env.DB;

//connecting to the mongoDB database
mongoose.connect(db, {
useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB database connected successfully");
}).catch((e)=>{
    console.log(`Error: ${e}`)
})

//starting the server
app.listen(port, ()=>{
    console.log(`PORT is running on ${port}`);
})