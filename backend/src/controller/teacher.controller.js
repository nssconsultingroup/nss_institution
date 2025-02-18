const { Teacher } = require('../models/teacher.model')


const registerTeacher = async (req, res) => {
    res.json({
        message: "working successfully"
    })
}


const getTeacher = async (req, res) => {}

const updateTeacher = async (req, res) => {}

const login = async (req, res) => {}

const logOut = async (req, res) => {}




module.exports = {
    registerTeacher,
    getTeacher,
    updateTeacher,
    login,
    logOut,
}