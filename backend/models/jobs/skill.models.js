import mongoose from "mongoose"

const  skillSchema = new mongoose.Schema({
    skillName: {
        type: String,
        required: true,
    },
    experience: {
        type:Number,
        required: true,
        default: 0

    }
},{timestamps:true})

export const Skill = mongoose.model("Skill", skillSchema)