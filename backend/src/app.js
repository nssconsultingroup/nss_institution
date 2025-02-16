const express = require('express');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors');


const app = express();

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// route import from routes folder
const teacherRouter = require('./routes/teacher.routes');

// route middlewares
app.use("/api/v1/teacher", teacherRouter)



module.exports = app;