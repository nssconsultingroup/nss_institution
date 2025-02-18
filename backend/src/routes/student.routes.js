const express = require('express')
const {registerStudent, getStudent, updateStudent, login, logOut} = require("../controller/studentCotroller")

const studentRouter = express.Router()

studentRouter.post("/register", registerStudent)

studentRouter.get("/student", getStudent)

studentRouter.put("/update", updateStudent)

studentRouter.post("/login", login)

studentRouter.post("/logout", logOut)



module.exports = studentRouter