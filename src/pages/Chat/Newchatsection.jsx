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
const Newchatsection = ({ sharedData }) => {
  const { mode } = useTheme();
  console.log("SharedData from newschatsection", sharedData);

  return (
    <Box
      sx={{
        backgroundColor: "background.view",
        borderTopRightRadius: "12px",
        borderBottomRightRadius: "12px",
      }}
      className="hidden md:block w-full md:w-[70vw] relative  mt-4 md:mt-0 rounded-tr-[15px] md:rounded-tr-[0px] "
    >
      <div
        className={` h-[84vh] md:h-[73vh] overflow-hidden mx-[5px]  md:mx-[20px] `}
      >
        <div className="flex  my-2 justify-between items-center">
          <div className="flex items-end gap-4     ">
            <div className="flex gap-4 items-center ">
              <div className="md:hidden">
                <ArrowBackIosIcon />
              </div>
              <div className="h-[52px] md:h-[47px] w-[52px] md:w-[47px] relative">
                <img
                  className="w-full h-full rounded-[50%] object-cover object-top"
                  src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                  alt=""
                />
                <p className="h-[12px] md:h-[9px] w-[12px] md:w-[9px] bg-blue-500 border-2 p-[2px]  rounded-[50%] absolute bottom-1 right-[0px]"></p>
              </div>
            </div>
            <div>
              <div className="text-[20px]">
                {sharedData.name ? sharedData.name : "Shakira"}
              </div>
              <p className="md:text-[11px]">Active</p>
            </div>
          </div>
          <ul className="flex gap-2 md:gap-4 ">
            {" "}
            <li>
              <CallIcon sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <FolderOpenIcon sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <DeleteOutlineIcon sx={{ fontSize: "20px" }} />
            </li>
            <li>
              {" "}
              <InfoOutlinedIcon sx={{ fontSize: "20px" }} />
            </li>
            <li>
              <MoreHorizIcon sx={{ fontSize: "20px" }} />
            </li>
          </ul>
        </div>
        <div className="h-[61vh] md:h-[55vh]  mt-[14px]  overflow-y-scroll  oveflow-hidden no-scrollbar">
          <div className="flex gap-8 mt-[25px] pl-1">
            <div className="h-[44px] md:h-[35px]  w-[240px] md:w-[70px] relative">
              <img
                className="w-full h-full rounded-full object-cover object-top"
                src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div>
              <div
                className={`w-full ${
                  mode === "dark" ? "bg-[#202021] " : "border-2 bg-gray-200"
                }  p-[12px] rounded-t-[12px] rounded-br-[12px] md:text-[13px] md:leading-[17px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
                voluptate inventore autem dolores quos veritatis ex cum nemo
                cumque obcaecati odio aperiam natus.
              </div>
              <p className="mt-2 md:text-[10px]">9:30pm</p>
            </div>
          </div>
          <div className="flex gap-8 mt-[25px] pl-1">
            <div>
              <div
                className={`w-full ${
                  mode === "dark" ? "bg-blue-400" : "bg-blue-400"
                }  p-[12px] rounded-t-[12px] rounded-bl-[12px] md:text-[13px] md:leading-[17px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
                voluptate inventore autem dolores quos veritatis ex cum nemo
                cumque obcaecati odio aperiam natus.
              </div>
              <p className="mt-2 md:text-[10px] text-end">9:30pm</p>
            </div>
            <div className="h-[44px] md:h-[35px]  w-[240px] md:w-[75px] relative">
              <img
                className="w-full h-full rounded-[50%] object-cover object-top"
                src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
          <div className="flex gap-8 mt-[25px] pl-1">
            <div className="h-[44px] md:h-[35px]  w-[240px] md:w-[75px] relative">
              <img
                className="w-full h-full rounded-[50%] object-cover object-top"
                src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div>
              <div
                className={`w-full ${
                  mode === "dark" ? "bg-[#202021] " : "border-2 bg-gray-200"
                }  p-[12px] rounded-t-[12px] rounded-br-[12px] md:text-[13px] md:leading-[17px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
                voluptate inventore autem dolores quos veritatis ex cum nemo
                cumque obcaecati odio aperiam natus.
              </div>
              <p className="mt-2 md:text-[10px]">9:30pm</p>
            </div>
          </div>
          <div className="flex gap-8 mt-[25px] pl-1">
            <div>
              <div
                className={`w-full ${
                  mode === "dark" ? "bg-blue-400" : "bg-blue-400"
                }  p-[12px] rounded-t-[12px] rounded-bl-[12px] md:text-[13px] md:leading-[17px]`}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                temporibus ipsam corrupti? Consequuntur eveniet excepturi, iste,
                voluptate inventore autem dolores quos veritatis ex cum nemo
                cumque obcaecati odio aperiam natus.
              </div>
              <p className="mt-2 md:text-[10px] text-end">9:30pm</p>
            </div>
            <div className="h-[44px] md:h-[35px]  w-[240px] md:w-[75px] relative">
              <img
                className="w-full h-full rounded-[50%] object-cover object-top"
                src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex md:mb-0     items-center justify-between px-4 pt-1 mt-4 mx-4 border rounded-[8px]">
          <div className="text-[12px] py-4 md:py-0 flex w-full mr-4 text-gray-700">
            <AddCircleIcon sx={{ fontSize: "20px", marginRight: "10px" }} />{" "}
            <input
              className="w-full outline-none bg-transparent"
              placeholder="Type message here"
            />
          </div>
          <div>
            <SendIcon
              sx={{
                color: "#3b82f6",
                transform: "rotate(-20deg)",
                paddingBottom: "6px",
              }}
            />
          </div>
        </div>
      </div>
      <p className="h-[1px] absolute top-[68px] w-full bg-gray-500"></p>
    </Box>
  );
};

export default Newchatsection;
