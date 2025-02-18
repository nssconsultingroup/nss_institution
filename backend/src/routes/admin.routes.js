const express = require('express')
const { registerAdmin, getAdmin, updateAdmin, login, logOut } = require('../controller/admin.controller')

const adminRouter = express.Router()

adminRouter.post("/register", registerAdmin)

adminRouter.get("/admin", getAdmin)

adminRouter.put("/update", updateAdmin)

adminRouter.post("/login", login)

adminRouter.post("/logout", logOut)



module.exports = adminRouter