import {Router} from "express";
import { loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js"
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router()

// /api/v1/users/register
router.route("/register").post(
    upload.fields([
        {
            name: "displayPicture",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

//router.route("/login").post(loginUser)
router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT , logoutUser)
router.route("/updateAccountDetails").post(verifyJWT , updateAccountDetails)

router.route("/refresh-token").post(refreshAccessToken)
export default router