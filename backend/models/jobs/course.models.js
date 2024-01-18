import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

    courseName: {
        type: String,
        required: true,
    },
    //is this really required?
    associatedWith: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education"
    }


},{timestamps:true})

export const Course = mongoose.model("Course", courseSchema)