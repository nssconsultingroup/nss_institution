const { Student } = require('../models/student.model')


const registerAdmin = async (req, res) => {
    res.json({
        message: "working successfully"
    })
}


const getAdmin = async (req, res) => {}

const updateAdmin = async (req, res) => {}

const login = async (req, res) => {}

const logOut = async (req, res) => {}




module.exports = {
    registerAdmin,
    getAdmin,
    updateAdmin,
    login,
    logOut,
}