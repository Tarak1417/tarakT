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
import { Box, ListItemIcon, SvgIcon } from "@mui/material";
import { grey } from "@mui/material/colors";
import GroupsIcon from "@mui/icons-material/Groups";

const ATS = ({ active }) => (
  <img
    src={active ? ActiveAtsIcon : AtsIcon}
    alt="Ats Icon"
    style={{ width: "24px", height: "24px" }}
  />
);
const Project = ({ active }) => (
  <img
    src={active ? ActiveProjectIcon : ProjectIcon}
    alt="Interview Icon"
    style={{ width: "24px", height: "24px" }}
  />
);
const Chat = ({ active }) => (
  <img
    src={active ? ActiveChatIcon : ChatIcon}
    alt="Interview Icon"
    style={{ width: "24px", height: "24px" }}
  />
);
const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName === activeIcon ? null : iconName);
  };

  return (
    <Box
      sx={{ backgroundColor: "background.default", height: "12dvh" }}
      className="fixed bottom-0 text-gray-500 w-full text-xs px-2 py-3 flex flex-row gap-4 items-center justify-between md:hidden"
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
            } px-2 py-px`}
          >
            <HomeOutlinedIcon color={`${activeIcon === "home" && "primary"}`} />
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
            } px-2 py-px`}
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
            } px-2 py-px`}
          >
            <AppsOutlinedIcon
              fontSize="large"
              color={`${activeIcon === "app" && "primary"}`}
            />
          </div>
        </div>
      </Link>
      <Link to="/attendance">
        <div
          className="flex flex-col items-center justify-center w-[50px]"
          onClick={() => handleIconClick("attendance")}
        >
          <div
            className={`${
              activeIcon === "attendance" &&
              "text-white rounded-3xl bg-blue-500/[.15] w-[90%] flex justify-center "
            } px-2 py-px`}
          >
            <Project active={activeIcon === "attendance"} />
          </div>
          <p className={`${activeIcon === "attendance" && "text-blue-500"}`}>
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
            } px-2 py-px`}
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
