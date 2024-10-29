import {create} from 'zustand';
//used in Conversation.jsx ,Message Container and used in so many comp,hooks

const useConversation=create((set)=>({
    selectedConversation:null,
    setSelectedConversation:(selectedConversation)=>set({selectedConversation}),
    messages:[],
    setMessages:(messages)=>set({messages}),
     
}))

export default useConversation;