import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import { env } from '../utilities/function';
import { useUser } from './Authorize';

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState({ });
    const [ contactChatList  , setContactChatList ] =  useState([])
    // const platformUser = useUser();
    let currentOrg = localStorage.getItem("org");
    if (currentOrg) {
      currentOrg = JSON.parse(currentOrg);
    }

    useEffect(() => {
        // Initialize the socket connection
        const newSocket = io(env('SERVER')); // Replace with your server URL
        setSocket(newSocket);

        // Register the user once on connection
        if (currentOrg._id) {
            newSocket.emit('registerUser', currentOrg._id);
        }

        // Handle incoming messages
        newSocket.on('receiveChat', ({ sender, receiver, content }) => {
            let periouseChat  = messages[sender] || []
            setMessages({...messages ,  [sender]  : [...periouseChat, { sender, receiver, content }]})
            // setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup on unmount
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Function to send a private message
    const sendMessage = (receiver, content) => {
        if (socket) {
            socket.emit('sendChat', {
                sender: currentOrg._id,
                receiver,
                content: content,
            });
            let periouseChat  = messages[receiver] || []
            setMessages({...messages , [receiver] : [...periouseChat, { sender : currentOrg._id, receiver, content }]})
        }
    };

    const setMessage = useCallback((oldMessage , receiverId) => {
             setMessages({...messages , receiverId : [ ...oldMessage ,...messages[receiverId] ]})
    }, [socket]);
    return { messages, sendMessage ,  setMessage ,contactChatList , setContactChatList };
};

export default useSocket;
