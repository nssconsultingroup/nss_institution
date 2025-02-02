var mongoose, {Schema} = require('mongoose');

const adminSchema  = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            max: 30,
            min: 3,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phone: {
            type: Number,
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
            type: Number,
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
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        },
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher"
        }
    },
    {
        timestamps: true,
    }
)

const admin = mongoose.model("Admin", adminSchema);
module.exports = admin;