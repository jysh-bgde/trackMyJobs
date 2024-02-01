import {Router} from "express";
import { registerUser } from "../controllers/user.controllers.js";

const router = Router()

// /api/v1/users/register
router.route("/register").post(registerUser)

//router.route("/login").post(loginUser)

export default router