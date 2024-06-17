import React, { useState } from "react";
import Newchat from "./Newchat";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Newcontact from "./Newcontact";
import { Box, Button } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
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
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Newsidebar = ({ setSharedData }) => {
  const [tabs, setTabs] = useState("chat");

  return (
    <Box
      sx={{
        backgroundColor: "background.view",

        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
      }}
      className="   w-full md:w-[30vw] relative  mt-4 md:mt-0 rounded-tr-[15px] md:rounded-tr-[0px] md:border-r border-r-gray-500"
    >
      <div className={` h-[84vh] md:h-[73vh] overflow-hidden  mx-[20px] `}>
        <div className="hidden md:block">
          <div className="flex gap-8 my-4 px-[20px] justify-center ">
            <Button
              onClick={() => setTabs("chat")}
              sx={{ padding: "5px 35px" }}
              variant="contained"
              // color="primary"
            >
              Chat
            </Button>
            <Button
              onClick={() => setTabs("contacts")}
              sx={{
                padding: "5px 25px",
                backgroundColor: "black",
                border: "1px solid ",
              }}
              variant="contained"
            >
              Contacts
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-between items-center mt-[25px]">
            <h3 className="text-[25px]">Chat</h3>
            <div>
              {" "}
              <MapsUgcRoundedIcon
                sx={{
                  marginRight: "15px",
                  color: "skyblue",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              />
              <CallRoundedIcon sx={{ color: "green", fontSize: "40px" }} />
            </div>
          </div>
          <div className="my-5">
            {" "}
            <Search sx={{ width: "100%", borderRadius: "9px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        </div>

        {tabs === "chat" && <Newchat setSharedData={setSharedData} />}

        {tabs === "contacts" && <Newcontact setSharedData={setSharedData} />}
      </div>
      <p className="h-[1px] absolute top-[68px] w-full bg-gray-500"></p>
    </Box>
  );
};

export default Newsidebar;
