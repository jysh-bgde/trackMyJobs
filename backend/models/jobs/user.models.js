import mongoose from "mongoose"
// import Job from "./job.models.js"


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
    education:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Education"
    },
    bio:{
        type:String,
    },
    gender:{
        type:String
    },
    address:{
        type: String
    },
    skills:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    },
    contactInfo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Contact"
    },
    languages:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language"
    },
    dateOfBirth:{
        type: String,
        required: true
    },
    isPremium:{
        type: Boolean,
        required:true,
        default: false,
    },
    premiumExpiryDate:{
        type: String,
    },
    JobsApplied: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job"
        }],
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,

    },
    displayPictureUrl:{
        type: String,
    },
    coverImageUrl:{
        type: String,
    },
    refreshToken: {
        type: String,
    },
    about:{
        type: String,

    },
    experiences:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Experience",

    },
    courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    }
},{timestamps:true})

export const User  = mongoose.model("User", userSchema);