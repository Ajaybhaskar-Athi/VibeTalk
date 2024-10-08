import mongoose from "mongoose";

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected To MongoDB");
    }catch(err){
        console.log("Error in Connecting to MongoDB",err.message);
    }
};



export default connectToMongoDB;