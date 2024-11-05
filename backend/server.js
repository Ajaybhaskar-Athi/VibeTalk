import express from "express"; //require() is commonjs and this import ,export are in ES6 Modules
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'; 

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";
import {app,server} from "./socket/socket.js";

// const app = express(); 
dotenv.config();
const port =process.env.PORT || 5000; //require ('dotenv') will used to acces port from .env file

app.get("/", (req, res) => {
  res.send("This is Root Node");
});

app.use(cookieParser());
app.use(express.json());
// app.use(cors);


app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


server.listen(port, () => {
    connectToMongoDB();
  console.log(`Server is Running on Port ${port}`);
});
