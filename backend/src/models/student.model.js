const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema(
    {
        name: {
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
        courseEnroled: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Courses"
            }
        ],
        photo: {
            type: String
        },
        role: {
            type: String,
            enum: ["student"],
            required: true
        },
        stream: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        watchHistory: [
            {
                videoId: {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "CourseVideo",
                  required: true
                },
                totalWatchtime: {
                  type: Number,
                  default: 0
                }
              }
        ],
        videoArrayId: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "CourseVideo"
            }
        ],
        purchasedNotes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Notes"
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

const Student =  mongoose.model("Student", studentSchema);
module.exports = Student