import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
  api_key:process.env.CLOUDINARY_APIKEY , 
  api_secret: process.env.CLOUDINARY_SECRET 
});

const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        //upload on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        //file uploaded successfully
        return response
    } catch (error) {
        //remove the locally saved temporary file as the upload failed
        fs.unlinkSync(localFilePath)
        return null
    }
}


export {uploadOnCloudinary}