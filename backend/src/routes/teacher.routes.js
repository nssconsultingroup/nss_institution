const express = require('express')
const {registerTeacher} = require('../controller/teacher.controller')

const teacherRouter = express.Router()

teacherRouter.post("/register", registerTeacher)



module.exports = teacherRouter