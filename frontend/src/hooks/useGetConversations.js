import { useEffect, useState } from "react"

const useGetConversations=()=>{
    
    const[loading,setLoading]=useState(false);
    const[conversations,setConversations]=useState([]);

    useEffect(()=>{
        const getConversations=async()=>{
            setLoading(true);
            try{
                const res=await fetch("/api/users");
                const data=await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                // setConversations(data);
                if (data.filteredUsers && Array.isArray(data.filteredUsers)) {
                    setConversations(data.filteredUsers); // Set conversations to the filteredUsers array
                  } else {
                    console.error("Filtered users not found or not an array. Check API response format.");
                  }
                console.log(data);
            }catch (err){
                toast.error(err.message);
            }finally{
                setLoading(false);
            }
        };

        getConversations();

    },[]);
    return {loading,conversations};
    
}
export default useGetConversations;