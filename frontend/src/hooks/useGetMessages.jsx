import React, { useEffect,useState } from "react";
import useConversation from "../Zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const getMessages = async () => {
		try {
			setLoading(true);
			const res = await fetch(`/api/messages/${selectedConversation._id}`);
			const data = await res.json();
			if (data.error) throw new Error(data.error);
			setMessages(data);
		} catch (err) {
			toast.error(err.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id]);

	return { messages, loading, getMessages }; // Return getMessages here
};

export default useGetMessages;

