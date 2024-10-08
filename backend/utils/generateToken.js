import jwt from "jsonwebtoken";


const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d' //15 days
    });
    res.cookie("jwt",token,{
      maxAge:15*24*60*60*1000 , //milli seconds for 15 days
      httpOnly:true,//ensures that the cookie cannot be accessed via JavaScript (e.g., document.cookie). This helps prevent Cross-Site Scripting (XSS) attacks 
      sameSite:"strict",//CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV!=="development"
    });
};

export default generateTokenAndSetCookie;


