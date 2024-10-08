import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute=async(req,res,next)=>{
    try{
           const token =req.cookies.jwt; //with out cookie parser it will give error
            if(!token){
                return res.status(401).json({error:"UnAuthorized - No Token Provided "}); 
            }
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            if(!decoded){
                return res.status(401).json({error:"UnAuthorized - Invalid Token "}); //token was there but it was not Matched
            }

            const user=await User.findById(decoded.userId).select("-password"); //decode.userId=>acces the userId u passed when creating Token and store it in user wihtout password
                if(!user){
                    return res.status(404).json({error:"UnAuthorized - User Not Found "}); //
                }
                req.user=user; // Attaches the found user to `req.user`
                next();
                }catch(error){
        console.log("Error in protectRoute middleWare: ",error.message);
        res.status(500).json({error:"Internal Server Error "})
    }
};

export default protectRoute;