import { Box } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "../../style/theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "axios";
import io from 'socket.io-client';
import { env, formatTimestamp } from "../../utilities/function";

// Connect to the server
// const socket = io(env('SERVER'));

const ChatSection = ({ currentChatUser, closeModal , messages , sendMessage }) => {
  const { mode } = useTheme();
  const [ chats  , setChats] =  useState([])
  const [message, setMessage] = useState('');
  const lastMessageRef = useRef(null);

  // useEffect(() => {
  //     // Listen for incoming private messages
  //     registerUser();
  //     socket.on('privateMessage', ({ senderId, message }) => {
  //       setChats((prevChat) => [...prevChat, `From ${senderId}: ${message}`]);
  //     });

  //     // Cleanup on component unmount
  //     return () => socket.off('privateMessage');
  // }, []);

  // const registerUser = () => {
  //     // Register the user ID with the server
  //     console.log("register User")
  //     socket.emit('registerUser', userId);
  // };

  const handelSendMessage = (e) => {
      // e.preventDefault();
      // Send the message to the server
      sendMessage(currentChatUser._id, message);
      setMessage('');
  };
  let page = 1;
  console.log("SharedData from newschatsection", messages);

const fetchChatList  = useCallback(
    async () => {
        // setJobs(null);
        try {
            const response = await axios.get(
                `/hr/message/details?receiver=${currentChatUser._id}&page=${page}&limit=0`
            );
            const data = response.data;
            setChats(data.messages)
        } catch (e) {
            console.warn(e);
        }
    },
    [currentChatUser]
);

const scrollToBottom = () => {
  lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' , block: "end", inline: "nearest" });
};

useEffect(() => {
  fetchChatList();
}, [fetchChatList]);

useEffect(() => {
  scrollToBottom();
}, [messages]);

const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of Enter (like submitting a form)
      if (message.trim()) {
        handelSendMessage();
      }
  }
};



  let img = "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww";


  let  chatsOld  =  [ { 
    type :"receiver",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  } , 

  { 
    type :"sender",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  },
  { 
    type :"receiver",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  } , 

  { 
    type :"sender",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  },
  { 
    type :"receiver",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  } , 

  { 
    type :"sender",
    message :`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
    temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
    voluptate inventore autem dolores quos veritatis ex cum nemo
    cumque obcaecati odio aperiam natus.`
  }


] 
  return (
    <>
      <div className={`overflow-hidden relative flex flex-col mx-2`}>
        <div className="flex md:border-b md:border-b-[#3F3F3F] my-4 md:my-0 md:mt-4 md:pb-2 md:pt-px justify-between items-center">
          <div className="flex md:mx-2 items-center gap-2.5 ">
            <div className="flex gap-4 items-center ">
              <div
                className="md:hidden"
                onClick={() => {
                  closeModal();
                }}
              >
                <ArrowBackIosIcon sx={{ width: "22px", height: "22px" }} />
              </div>
              <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[40px] relative">
                <img
                  className="w-full h-full rounded-full object-cover object-top"
                  src={img}
                  alt=""
                />
                <p className="h-[7px] w-[7px]  bg-blue-500 border p-[2px]  rounded-full absolute bottom-[4px] md:bottom-[3px] md:right-[1px] right-[-1px]"></p>
              </div>
            </div>
            <div className="font-bold">
              <div className="text-base ">
                {currentChatUser.firstName ? currentChatUser.firstName  : "N/a"}{" "} {currentChatUser.lastName && currentChatUser.lastName}
              </div>
              <p className=" text-[#BDBDBD] text-xs md:text-[11px]">Active</p>
            </div>
          </div>
          <ul className="flex gap-2 md:gap-6 ">
            {" "}
            <li>
              <CallIcon sx={{ fontSize: "17px" }} />
            </li>
            <li>
              <FolderOpenIcon sx={{ fontSize: "17px" }} />
            </li>
            <li>
              <DeleteOutlineIcon sx={{ fontSize: "17px" }} />
            </li>
            <li>
              {" "}
              <InfoOutlinedIcon sx={{ fontSize: "17px" }} />
            </li>
            <li>
              <MoreHorizIcon sx={{ fontSize: "17px" }} />
            </li>
          </ul>
        </div>
        <p className="h-[1px] md:hidden bg-[#111111] w-full"></p>

        <Box style={ { height : 'calc(100vh - 280px)'}}  className="overflow-y-auto mt-[14px] px-2 mb-2 md:mt-0 no-scrollbar" 
       >
          {chats.map((chat , index )  => (
            
            <div key={index} className="  md:text-xs
            text-sm font-bold">
              {(chat?.sender == currentChatUser?._id) ? 
               <div className="flex flex-row w-full mt-[25px] justify-start">
               <div>
                 <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px]">
                   <img
                     className="w-full h-full rounded-full object-cover object-top"
                     src={img}
                     alt=""
                   />
                 </div>
               </div>
               <div className=" px-3.5">
                 <div
                   className={`${
                     mode === "dark" ? "bg-[#1E1E1E]" : "border-2 bg-[#EEEEEE]"
                   }  p-[12px] rounded-t-[12px]  rounded-br-[12px]  md:leading-[17px]`}
                 >
                 {chat?.content}
                 </div>
                 <p className="mt-1    text-[#434343]"> { formatTimestamp(chat.createdAt) }</p>
               </div>
             </div>  
              : 
              <div className="flex flex-row w-full mt-[25px] justify-end">
              <div className="text-right px-3.5">
                <div
                  className={`${
                    mode === "dark" ? "bg-[#3C95D0]" :"bg-[#51A0D5]"
                  }  p-[12px] rounded-t-[12px] rounded-bl-[12px]  md:leading-[17px]`}
                >
                   {chat?.content}
                </div>
                <p className="mt-1   text-[#434343]">{ formatTimestamp(chat.createdAt) }</p>
              </div>
              <div>
                <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px] ">
                  <img
                    className="w-full h-full rounded-full object-cover object-top"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            </div> } 
            </div>
          ))}

          {messages[currentChatUser?._id]?.map((chat , index )  => (
            <div key={index} className="  md:text-xs
            text-sm font-bold">
              {(chat?.sender == currentChatUser?._id) ? 
               <div className="flex flex-row w-full mt-[25px] justify-start">
               <div>
                 <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px]">
                   <img
                     className="w-full h-full rounded-full object-cover object-top"
                     src={img}
                     alt=""
                   />
                 </div>
               </div>
               <div className=" px-3.5">
                 <div
                   className={`${
                     mode === "dark" ? "bg-[#1E1E1E]" : "border-2 bg-[#EEEEEE]"
                   }  p-[12px] rounded-t-[12px]  rounded-br-[12px]  md:leading-[17px]`}
                 >
                 {chat?.content}
                 </div>
                 <p className="mt-1    text-[#434343]">{ formatTimestamp(chat.createdAt) }</p>
               </div>
             </div>  
              : 
              <div className="flex flex-row w-full mt-[25px] justify-end">
              <div className="text-right px-3.5">
                <div
                  className={`${
                    mode === "dark" ? "bg-[#3C95D0]" :"bg-[#51A0D5]"
                  }  p-[12px] rounded-t-[12px] rounded-bl-[12px]  md:leading-[17px]`}
                >
                   {chat?.content}
                </div>
                <p className="mt-1   text-[#434343]">{ formatTimestamp(chat.createdAt) }</p>
              </div>
              <div>
                <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px] ">
                  <img
                    className="w-full h-full rounded-full object-cover object-top"
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            </div> } 
            </div>
          ))}
           <div ref={lastMessageRef}> </div>
        </Box>
       
        <Box  sx={{backgroundColor : "background.input"}} className="flex items-center justify-between px-4  rounded-[8px]">       
          <div className="text-[12px] py-4  md:py-2 flex w-full mr-4">
            <AddCircleIcon color={"#626262"} sx={{ fontSize: "26px", marginRight: "16px" , color :"#626262" }} />{" "}
            <input
              className="w-full outline-none bg-transparent placeholder:text-[#494949] placeholder:text-base md:placeholder:text-sm"
              placeholder="Type message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown} // Listen for keydown events
            />
          </div>
          <div>
            <SendIcon
              sx={{
                fontSize: "26px",
                color: "#3b82f6",
                transform: "rotate(-35deg)",
                marginBottom:"6px"
                
              }}
              onClick={handelSendMessage}
            />
        </div>
        </Box>
      </div>
     
      {/* <p className="h-[1px] absolute top-[68px] w-full bg-gray-500"></p> */}
    </>
  );
};

export default ChatSection;
