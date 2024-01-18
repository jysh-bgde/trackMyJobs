import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    mobileNumber:[{
        type: String,
    }],
    linkedIn:{
        type: String
    },
    gmail:{
        type: String
    },
    twitter:{
        type: String
    }
},{timestamps:true})

export const Contact = mongoose.model("Contact", contactSchema)