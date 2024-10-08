import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model for the sender
        ref: "User", // senderId comes from the User model
        required: true
    },
    receiverId: { // This field should be receiverId instead of repeating senderId
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model for the receiver
        ref: "User", // receiverId comes from the User model
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Message = mongoose.model("Message", messageSchema);
export default Message;
