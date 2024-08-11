import React, { useEffect, useState } from "react";
import ChatList from "./ChatList";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ContactList from "./ContactList";
import { Box, Button, IconButton, SvgIcon, Tooltip, Typography } from "@mui/material";
import ChatSection from "./Newchatsection";
import chatIcon from "../../services/icons/chatIcon/chat.svg";
import callIcon from "../../services/icons/chatIcon/call.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.custom.search.main,
  width: "100%",
  borderRadius: "10px",
  padding: "0px 13px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize: "14px",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3.5)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ChatPage = () => {
  const [tabs, setTabs] = useState("chat");
  const [sharedData, setSharedData] = useState([]);
  return (
    <Box className="h-full flex flex-col overflow-hidden sm:px-4 px-2 py-6 "  sx={{ backgroundColor: "background.main" , borderRadius : '14px' }} >
      <div 
       className="hidden md:flex justify-between items-center pb-3 ">
      <h1 className="text-2xl text-neutral-500">Chat</h1>
        <Tooltip title="info" placement="top">
          {/* <IconButton disableRipple variant="navIcon" sx={{ mr: 0 }}> */}
            <InfoOutlinedIcon  />
          {/* </IconButton> */}
        </Tooltip>
      </div>
      <div  className="flex  mx-1 md:pb-4 ">
      <Box
        sx={{ backgroundColor: { sm: "background.view" } }}
        className={` ${
          sharedData.name ? "hidden" : "block"
        } md:block  w-full  md:w-[30vw] relative md:mb-4   mt-4 md:mt-0 md:rounded-l-2xl  md:border-r border-r-[#3F3F3F]`}
      >
        <div  className={`md:overflow-hidden  overflow-y-scroll `}>
          <div className="hidden md:block border-b border-b-[#3F3F3F]">
            <div className="flex gap-4 my-4 px-2.5 justify-center ">
              <Button
                onClick={() => setTabs("chat")}
                sx={{
                  padding: "3px 38px",
                  backgroundColor: tabs == "chat" ? "" : "background.view",
                  border: tabs == "chat" ? "" : "0.8px solid",
                  color: "text.two",
                  borderRadius: "5px",
                }}
                variant="contained"
              >
                Chat
              </Button>
              <Button
                onClick={() => setTabs("contacts")}
                sx={{
                  borderRadius: "5px",
                  padding: "3px 25px",
                  color: "text.two",
                  backgroundColor: tabs == "contacts" ? "" : "background.view",
                  border: tabs == "contacts" ? "" : "0.8px solid ",
                }}
                variant="contained"
              >
                Contacts
              </Button>
            </div>
          </div>
          <div className="md:hidden  mx-2 ">
            <div className="flex justify-between items-center ">
              <Typography
                variant="div"
                className="text-[20px]"
                color={"text.four"}
              >
                Chat
              </Typography>
              <div className="flex flex-row gap-6">
                <div onClick={() => setTabs("chat")}>
                  <img
                    src={chatIcon}
                    alt="Interview Icon"
                    style={{ width: "22px", height: "22px" }}
                  />
                </div>
                <div onClick={() => setTabs("contacts")}>
                  <img
                    src={callIcon}
                    alt="Interview Icon"
                    style={{ width: "21px", height: "21px" }}
                  />
                </div>
              </div>
            </div>
            <div className="my-5">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon sx={{ width: "18px", height: "18px" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  sx={{
                    "& ::placeholder": {
                      fontSize: "small",
                      color: "text.secondary",
                    },
                  }}
                  placeholder={
                    tabs == "chat" ? "Search chat" : "Search contact"
                  }
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
          </div>
          <div className="" >
            {tabs === "contacts" ? (
              <ContactList setSharedData={setSharedData} />
            ) : (
              <ChatList setSharedData={setSharedData} />
            )}
          </div>
        </div>
        {/* <p className="h-[1px] hidden md:block absolute top-[68px] w-full bg-gray-500"></p> */}
      </Box>

      <Box
        sx={{ backgroundColor: { sm: "background.view" } }}
        className={` ${
          sharedData.name ? "block" : "hidden"
        } w-full md:w-[70vw] relative md:block  md:mb-4 `}
      >
        <ChatSection sharedData={sharedData} setSharedData={setSharedData} />
      </Box>
    </div>
    </Box>
  );
};

export default ChatPage;
