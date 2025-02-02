const mongoose = require('mongoose');

const adminSchema  = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            index: true
        },
        fullName: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: String,
            match: /^[0-9]{10}$/,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        aadhar: {
            type: String,
            match: /^[0-9]{12}$/,
            required: true
        },
        role: {
            type: String,
            enum: ["admin", "teacher", "student"],
        },
        ip: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        studentId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
        teacherId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher"
            }
        ],
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true,
    }
)

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;