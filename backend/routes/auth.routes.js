//simply u can make auth.js as file name also no issue
import express from "express";
import { login,logout,signup } from "../controllers/auth.controller.js";
const router=express.Router();

router.post("/login",login);
router.post("/logout",logout);
router.post("/signup",signup);

export default router;