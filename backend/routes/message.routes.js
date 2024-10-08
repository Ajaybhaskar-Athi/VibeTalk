import express from "express";
import { sendMessage,getMessages } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage);//protectRoute MiddleWare => check is the User Logged in or Not . likes AN authentication such that not evry user will send it But only those who logged in

router.get("/:id",protectRoute,getMessages);

export default router;