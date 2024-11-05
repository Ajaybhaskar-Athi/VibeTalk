import {  createContext, useContext, useEffect, useState } from "react";
import {  useAuthContext } from "./AuthContext";
import { io } from "socket.io-client"; 




const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			const newSocket = io("http://localhost:8000", {
				query: {
					userId: authUser._id,
				},
			});

			setSocket(newSocket);
            //after conecting check users who are online

			// socket.on() is used to listen to the events. can be used both on client and server side
			newSocket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => newSocket.disconnect();//when comp unmounted
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};

