import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    subHeading:{
        type: String,
    },
    content:{
        type: String,
        required:true,
    }
},{timestamps:true})

export const Blog = mongoose.model("Blog", blogSchema)