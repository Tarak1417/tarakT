import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import { env } from '../utilities/function';
import { useUser } from './Authorize';

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState([]);
    const [ contactChatList  , setContactChatList ] =  useState([])
    const [currentReceiverId , setCurrentReceiverId] = useState("");

    const platformUser = useUser();

    useEffect(() => {
        // Initialize the socket connection
        const newSocket = io(env('SERVER')); // Replace with your server URL
        setSocket(newSocket);

        // Register the user once on connection
        if (platformUser._id) {
            newSocket.emit('registerUser', platformUser._id);
        }

        // Handle incoming messages
        newSocket.on('receiveChat', ({ senderId, receiverId , message }) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Function to send a private message
    const sendMessage = useCallback((receiverId, messageContent) => {
        if (socket) {
            socket.emit('sendChat', {
                senderId: userId,
                receiverId,
                message: messageContent,
            });
        }
    }, [socket]);

    const setMessage = useCallback((oldMessage) => {
            setMessages((prevMessages) => [ ...oldMessage , ...prevMessages]);
    }, [socket]);
    return { messages, sendMessage ,  setMessage ,currentReceiverId , setCurrentReceiverId ,contactChatList };
};

export default useSocket;
