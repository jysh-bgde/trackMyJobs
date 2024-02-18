import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import { ApiError } from "./ApiError.js";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
  api_key:process.env.CLOUDINARY_APIKEY , 
  api_secret: process.env.CLOUDINARY_SECRET ,
  secure:true,
  api_environment_variable: process.env.CLOUDINARY_URL
  
});

import dotenv from 'dotenv'
dotenv.config()

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        //upload on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
            
        //file uploaded successfully
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        //remove the locally saved temporary file as the upload failed
        fs.unlinkSync(localFilePath)
        return null
    }
}

const removeFromCloudinary = async (filePublicId) =>
{
    try{
        if(!filePublicId)
        {
            throw new ApiError(400, "File not found")
        }
       

        const response = await cloudinary.uploader.destroy(filePublicId)
        
        return response
    }catch(error)
    {   
        throw new ApiError(500, "Internal error while removing file")
    }
}

export {uploadOnCloudinary, removeFromCloudinary}