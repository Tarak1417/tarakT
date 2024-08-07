import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
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
const Newchatsection = ({ sharedData, setSharedData }) => {
  const { mode } = useTheme();
  const [ chats  , setChats] =  useState([])
  let page = 1;
  console.log("SharedData from newschatsection", sharedData);

  const fetchChatList  = useCallback(
    async () => {
        // setJobs(null);
        try {
            const response = await axios.get(
                `/hr/message/details?receiver=${sharedData._id}&page=${page}&limit=0`
            );
            const data = response.data;
            setChats(data.messages)
        } catch (e) {
            console.warn(e);
        }
    },
    [sharedData]
);

useEffect(() => {
  fetchChatList();
}, [fetchChatList]);

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
      <div className={`h-[85vh] overflow-hidden relative flex flex-col   mx-2   `}>
        <div className="flex md:border-b md:border-b-[#3F3F3F] my-4 md:my-0 md:mt-4 md:pb-2 md:pt-px justify-between items-center">
          <div className="flex md:mx-2 items-center gap-2.5 ">
            <div className="flex gap-4 items-center ">
              <div
                className="md:hidden"
                onClick={() => {
                  setSharedData([]);
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
                {sharedData.firstName ? sharedData.firstName  : "N/a"}{" "} {sharedData.lastName && sharedData.lastName}
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

        <Box className="overflow-y-auto mt-[14px] px-2  md:mt-0 no-scrollbar" 
          sx={{height: {
            sm:'calc(100dvh - 305px)',
            md:'calc(72vh - 46px)'
          }  }}
        >
          {chats.map((chat , index )  => (
            
            <div key={index} className="  md:text-xs
            text-sm font-bold">
              {(chat.sender == sharedData._id) ? 
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
                 {chat.content}
                 </div>
                 <p className="mt-1    text-[#434343]">9:30pm</p>
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
                   {chat.content}
                </div>
                <p className="mt-1   text-[#434343]">9:30pm</p>
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
        </Box>
        <Box  sx={{backgroundColor : "background.input"}} className="flex items-center justify-between px-4 mb-5 mt-3 rounded-[8px]">       
          <div className="text-[12px] py-4  md:py-2 flex w-full mr-4">
            <AddCircleIcon color={"#626262"} sx={{ fontSize: "26px", marginRight: "16px" , color :"#626262" }} />{" "}
            <input
              className="w-full outline-none bg-transparent placeholder:text-[#494949] placeholder:text-base md:placeholder:text-sm"
              placeholder="Type message here"
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
            />
        </div>
        </Box>
      </div>
     
      {/* <p className="h-[1px] absolute top-[68px] w-full bg-gray-500"></p> */}
    </>
  );
};

export default Newchatsection;
