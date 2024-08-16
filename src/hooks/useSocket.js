import { useEffect, useState, useCallback } from 'react';
import io from 'socket.io-client';
import { env } from '../utilities/function';
import { useUser } from './Authorize';
import axios from 'axios';

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    const [messages, setMessages] = useState({ });
    const [chatList, setChatList ] =  useState([])
    const [contacts, setContacts] = useState([]);

    // const platformUser = useUser();
    let currentOrg = localStorage.getItem("org");
    if (currentOrg) {
      currentOrg = JSON.parse(currentOrg);
    }

    const fetchContactList = useCallback(async () => {
        // setJobs(null);
        try {
          const response = await axios.get(
            `/hr/message/contact?page=1&limit=200`
          );
          const data = response.data;
          setContacts(data.contact);
        } catch (e) {
          console.warn(e);
        }
      }, []);

    const fetchChatList  = useCallback(
        async () => {
            // setJobs(null);
            try {
                const response = await axios.get(
                    `/hr/message?page=1&limit=200`
                );
                const data = response.data;
                if(data.success){
                    setChatList(data.messages)
                }
            } catch (e) {
                console.warn(e);
            }
        },
        []
    );

    const getReceiverName  = ( id , message ,createdAt) =>{
        let receiverName  = contacts.find((contact ) => contact._id === id);
        let newChatList  =  chatList.filter( chat => chat.receiver._id !== id);

        setChatList([ {
            "_id": newChatList.length ,
            "receiver": receiverName,
            "content": message,
            "isViewed": false,
            createdAt
        }  , ...newChatList])
    }

    
    useEffect(() => {
        // Initialize the socket connection
        const newSocket = io(env('SERVER')); // Replace with your server URL
        setSocket(newSocket);

        // Register the user once on connection
        if (currentOrg._id) {
            newSocket.emit('registerUser', currentOrg._id);
            fetchContactList();
            fetchChatList();
        }

        // Handle incoming messages
        newSocket.on('receiveChat', ({ sender, receiver, content }) => {
         let createdAt =   new Date()
             setMessages((prevMessages) => {
                const previousChat = prevMessages[sender] || [];
                return { ...prevMessages, [sender]: [...previousChat, { sender, receiver, content  , createdAt : createdAt}] };
            });
            getReceiverName(sender ,content ,createdAt )
            // setMessages({...messages ,  [sender]  : [...periouseChat, { sender, receiver, content }]})
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
         let createdAt =   new Date()
         
            // let periouseChat  = messages[receiver] || []
            // setMessages({...messages , [receiver] : [...periouseChat, { sender : currentOrg._id, receiver, content }]})
         setMessages((prevMessages) => {
                const previousChat = prevMessages[receiver] || [];
                return { ...prevMessages, [receiver]: [...previousChat, { sender: currentOrg._id, receiver, content ,  createdAt :  createdAt }] };
            });
            getReceiverName(receiver ,content ,createdAt )

        }
    };

    const setMessage = useCallback((oldMessage , receiverId) => {
             setMessages({...messages , receiverId : [ ...oldMessage ,...messages[receiverId] ]})
    }, [socket]);
    return { messages, sendMessage ,  setMessage  ,  contacts  ,chatList };
};

export default useSocket;
