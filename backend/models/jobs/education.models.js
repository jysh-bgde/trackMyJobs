import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    school:{
        type:String,
        required: true,

    },
    degree:{
        type:String,
        required: true,
    },
    fieldOfStudy:{
        type: String,
        required:true,
    },
    startDate:{
        type: String,
        required:true,
    },
    endDate:{
        type:String,

    },
    isCurrentlyStudying:{
        type:Boolean,
        required:true,
        default: false,
    },
    activitiesAndSocieties:[{type:String}],
    description: {
        type:String
    },
    skills:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Skill",
    }
},{timestamps:true})

export const Education = mongoose.model("Education", educationSchema)