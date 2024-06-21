import React, { useState } from "react";
import Newchat from "./Newchat";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Newcontact from "./Newcontact";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import Newchatsection from "./Newchatsection";
import chatIcon from "../../services/icons/chatIcon/chat.svg";
import callIcon from "../../services/icons/chatIcon/call.svg";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.custom.search.main,
  width: "100%",
  borderRadius: "10px",
  padding : "0px 13px",
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
  fontSize:"14px",
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


const Newsidebar = () => {
  const [tabs, setTabs] = useState("chat");
  const [sharedData, setSharedData] = useState([]);
  return (
    <div className="flex md:mx-5 mx-1 ">
      <Box
        className={` ${
          sharedData.name ? "hidden" : "block"
        } md:block  w-full md:w-[30vw] relative  mt-4 md:mt-0  md:border-r border-r-gray-500`}
      >
        <div className={`overflow-hidden  md:mx-[20px] mx-2 `}>
          <div className="hidden md:block">
            <div className="flex gap-8 my-4 px-[20px] justify-center ">
              <Button
                onClick={() => setTabs("chat")}
                sx={{
                  padding: "5px 35px",
                  backgroundColor: tabs == "chat" ? "" : "background.view",
                  border: "1px solid ",
                  color: "text.two",
                }}
                variant="contained"
              >
                Chat
              </Button>
              <Button
                onClick={() => setTabs("contacts")}
                sx={{
                  padding: "5px 25px",
                  color: "text.two",
                  backgroundColor: tabs == "contacts" ? "" : "background.view",
                  border: "1px solid ",
                }}
                variant="contained"
              >
                Contacts
              </Button>
            </div>
          </div>

          <div className="md:hidden">
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
                  <SearchIcon sx={{width:"18px" , height:"18px"}} />
                </SearchIconWrapper>
                <StyledInputBase
                   sx={{'& ::placeholder':{fontSize:'small' ,  color:"text.secondary"}}}
                  placeholder= { tabs == "chat"? "Search chat" :"Search contact" }
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
          </div>

          {tabs === "chat" && <Newchat setSharedData={setSharedData} />}

          {tabs === "contacts" && <Newcontact setSharedData={setSharedData} />}
        </div>
        <p className="h-[1px] hidden md:block absolute top-[68px] w-full bg-gray-500"></p>
      </Box>

      <Box
        className={` ${
          sharedData.name ? "block" : "hidden"
        } w-full h-full md:w-[70vw] relative md:mt-0 `}
      >
        <Newchatsection sharedData={sharedData} setSharedData={setSharedData} />
      </Box>
    </div>
  );
};

export default Newsidebar;
