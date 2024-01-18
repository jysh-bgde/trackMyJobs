import mongoose from 'mongoose'

const languageSchema = new mongoose.Schema({
    language: {
        type: String,
        required:true,
    },
    proficiency:{
        type:String,
        enum:["Low, Mid, High"],
        required:true,
        default: "Mid"
    }
},{timestamps:true})

export const Language = mongoose.model("Language", languageSchema)