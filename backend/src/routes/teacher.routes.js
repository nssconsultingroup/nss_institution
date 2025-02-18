const express = require('express')
const {registerTeacher, getTeacher, updateTeacher, login, logOut} = require('../controller/teacher.controller')

const teacherRouter = express.Router()

teacherRouter.post("/register", registerTeacher)

teacherRouter.get("/teacher", getTeacher)

teacherRouter.put("/update",updateTeacher)

teacherRouter.post("/login",login)

teacherRouter.post("/logout", logOut)



module.exports = teacherRouter