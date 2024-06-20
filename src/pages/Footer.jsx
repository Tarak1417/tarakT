import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import VideoChatOutlinedIcon from "@mui/icons-material/VideoChatOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { Link } from "react-router-dom";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import AtsIcon from "../services/icons/menu/ats.svg";
import ActiveAtsIcon from "../services/icons/active-menu/ats.svg";
import ProjectIcon from "../services/icons/menu/project.svg";
import ActiveProjectIcon from "../services/icons/active-menu/project.svg";
import ChatIcon from "../services/icons/menu/chat.svg";
import ActiveChatIcon from "../services/icons/active-menu/chat.svg";

import HomeIcon from "../services/icons/menu/ic_outline-home.svg";
import ActiveHomeIcon from "../services/icons/active-menu/ic_outline-home.svg";

import AppsIcon from "../services/icons/menu/apps.svg";
import ActiveAppsIcon from "../services/icons/active-menu/apps.svg";
import { Box, ListItemIcon, SvgIcon } from "@mui/material";
import { grey } from "@mui/material/colors";
import GroupsIcon from "@mui/icons-material/Groups";

const ATS = ({ active }) => (
  <img
    src={active ? ActiveAtsIcon : AtsIcon}
    alt="Ats Icon"
    style={{ width: "20px", height: "20px" }}
  />
);
const Project = ({ active }) => (
  <img
    src={active ? ActiveProjectIcon : ProjectIcon}
    alt="Interview Icon"
    style={{ width: "20px", height: "20px" }}
  />
);
const Chat = ({ active }) => (
  <img
    src={active ? ActiveChatIcon : ChatIcon}
    alt="Interview Icon"
    style={{ width: "20px", height: "20px" }}
  />
);

const Home = ({ active }) => (
  <img
    src={active ? ActiveHomeIcon : HomeIcon}
    alt="Interview Icon"
    style={{ width: "20px", height: "20px" }}
  />
);
const Apps = ({ active }) => (
  <img
    src={active ? ActiveAppsIcon : AppsIcon}
    alt="Interview Icon"
    style={{ width: "20px", height: "20px" }}
  />
);
const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };

  return (
    <Box
      sx={{ backgroundColor: "background.default"  , height : "59px" }}
      className="fixed bottom-0 text-gray-500 w-full text-[10px] px-2 flex flex-row gap-4 items-center justify-between md:hidden"
    >
      <Link to="/">
        <div
          className="flex flex-col items-center justify-center  w-[50px]"
          onClick={() => handleIconClick("home")}
        >
          <div
            className={`${
              activeIcon === "home" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-1 `}
          >
             <Home active={activeIcon === "home"} />
          </div>
          <p className={`${activeIcon === "home" && "text-blue-500 "}`}>Home</p>
        </div>
      </Link>
      <Link to="/receivedapplications">
        <div
          className="flex flex-col items-center justify-center  w-[50px]"
          onClick={() => handleIconClick("ats")}
        >
          <div
            className={`${
              activeIcon === "ats" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-1`}
          >
            <ATS active={activeIcon === "ats"} />
          </div>
          <p className={`${activeIcon === "ats" && "text-blue-500"}`}>ATS</p>
        </div>
      </Link>
      <Link to="/apps">
        <div
          className="flex flex-col items-center justify-center  w-[70px]"
          onClick={() => handleIconClick("app")}
        >
          <div
            className={`${
              activeIcon === "app" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-1`}
          >
            <Apps  active={activeIcon === "app"} />
            
          </div>
        </div>
      </Link>
      <Link to="/dashboardproject">
        <div
          className="flex flex-col items-center justify-center w-[50px]"
          onClick={() => handleIconClick("projects")}
        >
          <div
            className={`${
              activeIcon === "projects" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-1`}
          >
            <Project active={activeIcon === "projects"} />
          </div>
          <p className={`${activeIcon === "projects" && "text-blue-500"}`}>
            Projects
          </p>
        </div>
      </Link>
      <Link to="/chat">
        <div
          className="flex flex-col justify-center items-center w-[50px]"
          onClick={() => handleIconClick("chat")}
        >
          <div
            className={`${
              activeIcon === "chat" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-1`}
          >
            <Chat active={activeIcon === "chat"} />
          </div>
          <p className={`${activeIcon === "chat" && "text-blue-500"}`}>Chat</p>
        </div>
      </Link>
    </Box>
  );
};

export default Footer;
