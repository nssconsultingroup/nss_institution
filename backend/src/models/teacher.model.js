const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        channelUniqueId: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        channelName: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        coverImage: {
            type: String,
            required: true
        }, 
        role: {
            type: String,
            enum: ["teacher", "student"],
        },
        profession: {
            type: String,
            minlength: 3,
            maxlength: 30,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        phone: {
            type: String,
            match: /^[0-9]{10}$/,
            required: true
        }, 
        aadhar: {
            type: String,
            match: /^[0-9]{12}$/,
            required: true
        },
        ip: {
            type: String
        },
        courseId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Courses"
            }
        ],
        notes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Notes"
            }
        ],
        courseEnroledId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
        purchasedNotesId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
        videoId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "CourseVideo"
            }
        ],
        studentVisit: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student"
            }
        ],
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Teacher =  mongoose.model("Teacher", teacherSchema);
module.exports = Teacher