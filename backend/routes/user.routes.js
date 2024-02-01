import {Router} from "express";
import { registerUser } from "../controllers/user.controllers.js";
import {upload} from "../middlewares/multer.middlewares.js"

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

export default router