import {Router} from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserDisplayPicture, addJob } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

// /api/v1/users/register
router.route("/register").post(
  
    registerUser
    )

//router.route("/login").post(loginUser)
router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT , logoutUser)
router.route("/updateAccountDetails").post(verifyJWT , updateAccountDetails)
router.route("/add-job").post(verifyJWT , addJob)
router.route("/update-display-picture").post(verifyJWT,  
    upload.single( "displayPicture"
),  updateUserDisplayPicture)
router.route("/refresh-token").post(refreshAccessToken)
export default router