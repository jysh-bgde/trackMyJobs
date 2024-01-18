import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
    jobTitle:{
        type: String,
        required: true,
    },
    jobDescription:{
        type: String,
    },
    jobLocation:{
        type: String,
        required: true,

    },
    jobSalary:{
        type: String,
        required: true,
    },
    companyWebsite:{
        type: String,
        required:true,

    },
    jobAppliedOnWebsite:{
        type: String,
        required: true,
    },
    // jobResume:{
    //     type:String
    // },
    // jobCoverLetter:{
    //     type: String
    // },
    jobStatus: {
        type: String,
        enum: ["Applied", "In Process", "Rejected","Accepted"],
        default: "Applied"
    }
},{timestamps:true})

export const Job = mongoose.model("Job", jobSchema)