import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage=async(req,res)=>{
 
        try{
            const {message}=req.body;
            const {id:receiverId}=req.params; //or const id=req.params.id (basic JS)
                const senderId=req.user._id;//since we already attached user to Req object in ProtectRoute Middleware

                let conversation=await Conversation.findOne({
                        participants:{$all:[senderId,receiverId]}
                })

                if(!conversation){//first time they are chatting
                    conversation=await Conversation ({ //this will create and save it too means new Conversation({...}) + .save()
                        participants:[senderId,receiverId],
                    })
                }

                const newMessage=new Message({
                        senderId:senderId,
                        receiverId:receiverId,
                        message:message
                })
                if(newMessage){
                        conversation.messages.push(newMessage._id);
                }

                await conversation.save();// no need we use create() so it automaticaly saves it
                await newMessage.save();

                ///also if 2 promises are there u can do like below
                // await Promise.all([conversation.save(),newMessage.save()]);//this wil run in parallel above will run obe by one 
                console.log("Message Sent",req.params.id);
                res.status(201).json(newMessage);
        }
        catch(error){
            console.log("Error: ",error.message);
            res.status(500).json({error:"Internal Sever Error"});
        }
};


export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        // Trim the userToChatId to remove any whitespace or newline characters
        const trimmedUserToChatId = userToChatId.trim();

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, trimmedUserToChatId] }
        }).populate("messages");
        // console.log("Conversation:", conversation);

        if (!conversation) {
            return res.status(200).json([]);
        }
        
		const messages = conversation.messages;

		res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getMessages:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
