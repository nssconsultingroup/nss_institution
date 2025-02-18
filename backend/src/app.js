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
const adminRouter = require("./routes/admin.routes");
const studentRouter = require("./routes/student.routes")

// route middlewares
app.use("/api/v1/teacher", teacherRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/student",studentRouter)



module.exports = app;