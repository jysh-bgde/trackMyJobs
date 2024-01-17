import mongoose from "mongoose"
import Job from "./job.models.js"


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,        
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    isPremium:{
        type: Boolean,
        required:true,
        default: false,
    },
    JobsApplied: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Job
        }],
  
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true,

    }
},{timestamps:true})

export const User  = mongoose.model("User", userSchema);