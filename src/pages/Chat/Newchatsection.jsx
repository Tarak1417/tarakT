import { Box } from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "../../style/theme";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SendIcon from "@mui/icons-material/Send";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Newchatsection = ({ sharedData, setSharedData }) => {
  const { mode } = useTheme();
  console.log("SharedData from newschatsection", sharedData);

  let img = "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww";


  let  chats  =  [ { 
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
      <div className={`h-[85vh] overflow-hidden relative flex flex-col  md:h-[73vh]  mx-2  md:mx-[20px] `}>
        <div className="flex  my-4 justify-between items-center">
          <div className="flex items-center gap-2.5 ">
            <div className="flex gap-4 items-center ">
              <div
                className="md:hidden"
                onClick={() => {
                  setSharedData([]);
                }}
              >
                <ArrowBackIosIcon sx={{ width: "22px", height: "22px" }} />
              </div>
              <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px] relative">
                <img
                  className="w-full h-full rounded-full object-cover object-top"
                  src={img}
                  alt=""
                />
                <p className="h-[7px] md:h-[9px] w-[7px] md:w-[9px] bg-blue-500 border p-[2px]  rounded-full absolute bottom-[4px] right-[-1px]"></p>
              </div>
            </div>
            <div className="font-bold">
              <div className="text-base ">
                {sharedData.name ? sharedData.name : "Shakira"}
              </div>
              <p className=" text-[#BDBDBD] text-xs md:text-[11px]">Active</p>
            </div>
          </div>
          <ul className="flex gap-2 md:gap-4 ">
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

        <Box className="overflow-y-auto md:h-[55vh]  mt-[14px] px-2  no-scrollbar" 
          sx={{height: 'calc(100dvh - 305px)' }}
        >
          {chats.map((chat , index )  => (
            
            <div key={index} className="">
              {(chat.type == "receiver") ? 
               <div className="flex flex-row w-full mt-[25px] justify-between">
               <div>
                 <div className="h-[32px] w-[32px] md:h-[40px]  md:w-[50px]">
                   <img
                     className="w-full h-full rounded-full object-cover object-top"
                     src={img}
                     alt=""
                   />
                 </div>
               </div>
               <div className="text-sm font-bold  px-3.5">
                 <div
                   className={`${
                     mode === "dark" ? "bg-[#1E1E1E]" : "border-2 bg-[#EEEEEE]"
                   }  p-[12px] rounded-t-[12px]  rounded-br-[12px] md:text-[13px] md:leading-[17px]`}
                 >
                 {chat.message}
                 </div>
                 <p className="mt-1  md:text-[10px]  text-[#434343]">9:30pm</p>
               </div>
             </div>
              
              : 
              <div className="flex flex-row w-full mt-[25px] justify-between">
              <div className="text-sm font-bold text-right px-3.5">
                <div
                  className={`${
                    mode === "dark" ? "bg-[#3C95D0]" :"bg-[#51A0D5]"
                  }  p-[12px] rounded-t-[12px] rounded-bl-[12px] md:text-[13px] md:leading-[17px]`}
                >
                   {chat.message}
                </div>
                <p className="mt-1   md:text-[10px]  text-[#434343]">9:30pm</p>
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
        <Box  sx={{backgroundColor : "background.view"}} className="flex md:mb-0 items-center justify-between px-4 mb-5 mt-3 rounded-[8px]">       
       
          <div className="text-[12px] py-4  md:py-0 flex w-full mr-4">
            <AddCircleIcon color={"#626262"} sx={{ fontSize: "26px", marginRight: "16px" , color :"#626262" }} />{" "}
            <input
              className="w-full outline-none bg-transparent placeholder:text-[#494949] placeholder:text-base"
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
