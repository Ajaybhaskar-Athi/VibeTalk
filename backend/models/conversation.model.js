import mongoose from "mongoose";

const conversationSchema=new mongoose.Schema({
    participants:[ // is an array of objects that consist of ObjectId references to the User model.
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        }
    ],
    messages:[ //stores message IDs
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Message',
            default:[]
        }
    ],

},{timestamps:true});


const Conversation=mongoose.model("Conversation",conversationSchema);
export default Conversation;
