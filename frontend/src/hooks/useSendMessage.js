import React, { useState } from 'react';
import useConversation from "../Zustand/useConversation"
import toast from "react-hot-toast";

const useSendMessage=()=>{
    const [loading,setLoading]=useState();
    const {Messages,setMessages,selectedConversation}=useConversation();

        const sendMessage=async(message)=>{
            setLoading(true);
            try{
                const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    }   ,
                    body:JSON.stringify({message})
                });
                const data=await res.json();
                if(data.error){
                    throw new error(data.error);
                }

            }catch(err){
                toast.error(err.message);
            }finally{
                setLoading(false);
            }

        }
        return {sendMessage,loading};


}

export default useSendMessage;
