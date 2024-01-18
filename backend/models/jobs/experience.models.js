import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true,
    },
    companyName:{
        type: String,
        required: true,
    },
    isFullTime:{
        type: Boolean,
        required: true,
        default: true,
    },
    isCurrentlyWorking:{
        type: Boolean,
        required: true,
        default:true
    },
    startDate:{
        type: String,
        required: true,
    },
    endDate:{
        type: String,
    },
    location:{
        type: String,
        required: true,
    },
    type:{
        type: String,
        enum: ["Remote", "Hybrid", "On-site"],
        default: "On-site",
        required:true,
    },
    description:{
        type: String,
        required: true,
    },
    skills:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill"
    }]
},{timestamps:true})


export const Experience = mongoose.model("Experience", experienceSchema)