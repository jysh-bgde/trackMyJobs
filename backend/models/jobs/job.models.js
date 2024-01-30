import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const jobSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
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


jobSchema.plugin(mongooseAggregatePaginate)

export const Job = mongoose.model("Job", jobSchema)