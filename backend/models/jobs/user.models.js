import mongoose from "mongoose"
// import Job from "./job.models.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
        trim: true,        
    },
    middleName: {
        type: String,
        trim: true,        

    },
    lastName: {
        type: String,
        required: true,
        trim: true,        

    },
    fullName: {
        type: String,
        required: true,
        trim: true,        
        index: true,
    },
    userName: {
        type: String,
        required: true,
        trim: true,        
        index: true,
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
        required: [true, "Password is required"],

    },
    displayPictureUrl:{
        type: String, //cloudinary
    },
    coverImageUrl:{
        type: String, //cloudinary
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

userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
    {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    
    return jwt.sign({
        _id: this._id,
        email: this.email,
        userName: this.userName,
        fullName: this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )


}

userSchema.methods.generateRefreshToken = function () {
    
    return jwt.sign({
        _id: this._id,
     
    },
    process.env.ACCESS_REFRESH_SECRET,
    {
        expiresIn: process.env.ACCESS_REFRESH_EXPIRY
    }
    )
}




export const User  = mongoose.model("User", userSchema);