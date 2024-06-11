import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import view from "../ReceivedApp/viewicon.png";
import AttendViewPage from "../Attendance/AttendView/AttendViewPage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";

// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const ViewProject = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handlePrevScreen = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleNextScreen = () => {
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const userData = [
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:50 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:50 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:09 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
  ];

  const getColor = (status) => {
    switch (status) {
      case "Present":
        return { bgColor: "bg-green-950", textColor: "text-green-500" };
      case "Holiday":
        return { bgColor: "bg-sky-950", textColor: "text-sky-500" };
      case "Late":
        return { bgColor: "bg-red-950", textColor: "text-red-500" };
      default:
        return { bgColor: "bg-gray-900", textColor: "text-gray-500" };
    }
  };

  const getProgressBarStyle = (status) => {
    switch (status) {
      case "Present":
        return { width: "100%", backgroundColor: "#34D399" };
      case "Holiday":
        return { width: "100%", backgroundColor: "#6B7280" };
      case "Late":
        return { width: "75%", backgroundColor: "#34D399" };
      case "Present & Late":
        return { width: "75%", backgroundColor: "#34D399" };
      default:
        return { width: "100%", backgroundColor: "#6B7280" };
    }
  };

  const avatarData = [
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
  ];

  const Months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const [date, setDate] = useState({
    employeeId: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const Years = Array(41)
    .fill(1)
    .map((el, i) => i + 2009);

  const [tab, setTab] = useState("task");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  console.log(tab);

  return (
    <Box sx={{ backgroundColor: "background.main" }}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:w-full p-4">
          <div className="p-2">
            <h1 className="text-xs md:text-2xl text-neutral-500">
              Project List
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="flex  items-center text-white font-bold text-[8px] md:text-[12px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700">
              Create New Project
            </button>
            <InfoOutlinedIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-[-31px]">
        <div className="flex items-center flex-row md:flex-row  md:w-full p-4">
          <div className="p-2 ml-2">
            <p className="text-[15px] md:text-[15px] text-neutral-200 ">
              OverView
            </p>
          </div>
          {tab == "task" ? (
            <div
              className="p-2 ml-2 "
              onClick={(e) => handleTabChange("task")}
              style={{
                backgroundColor: "rgb(14 165 233 ",
                color: "white",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <h1 className="text-[14px] md:text-[15px] w-[50px] text-center  text-white">
                Task
              </h1>
            </div>
          ) : (
            <div className="p-2 ml-2 " onClick={(e) => handleTabChange("task")}>
              <h1 className="text-[14px] md:text-[15px] w-[50px] text-center  text-white">
                Task
              </h1>
            </div>
          )}
          {tab == "files" ? (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("files")}
              style={{
                backgroundColor: "rgb(14 165 233 ",
                color: "white",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <h1 className="text-[14px] md:text-[15px] text-white-500">
                Files
              </h1>
            </div>
          ) : (
            <div className="p-2 ml-2" onClick={(e) => handleTabChange("files")}>
              <h1 className="text-[14px] md:text-[15px] text-neutral-500">
                Files
              </h1>
            </div>
          )}

          {tab == "milestone" ? (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("milestone")}
              style={{
                backgroundColor: "rgb(14 165 233 ",
                color: "white",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <h1 className="text-[14px] md:text-[15px] text-white-500">
                milestone
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("milestone")}
            >
              <h1 className="text-[14px] md:text-[15px] text-neutral-500">
                milestone
              </h1>
            </div>
          )}
          {tab == "Comments" ? (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("Comments")}
              style={{
                backgroundColor: "rgb(14 165 233 ",
                color: "white",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <h1 className="text-[14px] md:text-[15px] text-white-500">
                Comments
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("Comments")}
            >
              <h1 className="text-[14px] md:text-[15px] text-neutral-500">
                Comments
              </h1>
            </div>
          )}

          <div className="p-2 ml-2">
            <h1 className="text-[14px] md:text-[15px] text-neutral-500">
              Note
            </h1>
          </div>
          {tab == "Invoice" ? (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("Invoice")}
              style={{
                backgroundColor: "rgb(14 165 233 ",
                color: "white",
                borderTopRightRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            >
              <h1 className="text-[14px] md:text-[15px] text-white-500">
                Invoice
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={(e) => handleTabChange("Invoice")}
            >
              <h1 className="text-[14px] md:text-[15px] text-neutral-500">
                Invoice
              </h1>
            </div>
          )}
        </div>
      </div>
      {tab == "task" && (
        <Box
          className="w-[96%]  mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view", marginLeft: "22px" }}
        >
          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center"></div>
          </Box>

          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center">
              <p className="text-[12px] ml-3">Show</p>
              <select className="appearance-none bg-transparent pl-1 rounded leading-tight focus:outline-none focus:border-gray-500 text-[12px]">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
              <ArrowDropDownIcon fontSize="medium" className="text-zinc-500" />
              <p className="text-[12px]">entries</p>
            </div>

            <div className="w-full md:w-[22%] border border-gray-500 rounded-lg flex flex-row items-center">
              <input
                placeholder="Search"
                className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
              />

              <ArrowDropDownIcon
                style={{ fontSize: "28px" }}
                className="text-zinc-500"
              />
            </div>
          </Box>

          <Box
            className="w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Grid className="flex flex-row border-b border-zinc-500">
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-[50%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Team
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Status
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Start Date
              </div>
              <div className="w-[50%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Deadline
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Progress
              </div>
              <div className="w-[25%] md:w-[14.6%] p-2  text-left text-sm md:text-[16px] font-bold">
                Action
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-[50%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-[20%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-[20%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    {avatarData.map((item) => (
                      <>
                        <div
                          class="MuiAvatar-root MuiAvatar-circular css-1m7vhif-MuiAvatar-root"
                          style={{ width: "15px", height: "16px" }}
                        >
                          <img alt="Remy Sharp" src={item.src} />
                        </div>
                      </>
                    ))}
                  </div>
                </div>
                <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  <div
                    className={`px-1 py-1 rounded-lg w-3/5 flex justify-center items-center ${
                      getColor(user.status).bgColor
                    } ${getColor(user.status).textColor}`}
                  >
                    {user.status}
                  </div>
                </div>
                <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.clockIn}
                </div>
                <div className="w-[50%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.clockOut}
                </div>
                <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  <div className="h-2 flex justify-between w-full">
                    <div
                      className="h-full rounded-lg"
                      style={{
                        width: getProgressBarStyle(user.status).width,
                        backgroundColor: getProgressBarStyle(user.status)
                          .backgroundColor,
                      }}
                    ></div>
                    {user.status === "Late" && (
                      <div
                        className="h-full rounded-lg"
                        style={{ width: "25%", backgroundColor: "#EF4444" }}
                      ></div>
                    )}
                  </div>
                </div>
                <div className="w-[25%] md:w-[14.6%] p-2 border-r border-zinc-500 flex justify-center items-center text-sm md:text-xs">
                  <IconButton> {user.action}</IconButton>
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 md:pt-10">
            <div className="p-2 rounded-lg ">
              <div className="flex items-center gap-0 md:gap-6">
                <p className="text-[12px] text-gray-400">
                  Show Rows: 1-10 of 20
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <KeyboardArrowLeftOutlinedIcon
                className="text-zinc-400 cursor-pointer"
                onClick={handlePrevScreen}
              />
              <p className="text-zinc-400">1</p>
              {currentScreen === 1 ? (
                <KeyboardArrowRightOutlinedIcon
                  className="text-zinc-300 cursor-pointer"
                  onClick={handleNextScreen}
                />
              ) : (
                <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                  2
                </div>
              )}
            </div>
          </div>
        </Box>
      )}

      {tab == "files" && (
        <Box
          className="w-[96%]  mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view", marginLeft: "22px" }}
        >
          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center"></div>
          </Box>

          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center">
              <p className="text-[12px] ml-3">Shows</p>
              <select className="appearance-none bg-transparent pl-1 rounded leading-tight focus:outline-none focus:border-gray-500 text-[12px]">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
              <ArrowDropDownIcon fontSize="medium" className="text-zinc-500" />
              <p className="text-[12px]">entries</p>
            </div>

            <div className="flex row">
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center'">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <ArrowDropDownIcon
                  style={{ fontSize: "28px" }}
                  className="text-zinc-500"
                />
              </div>

              <div className="  md:justify-center  ml-[30px]">
                <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Upload Files
                </button>
              </div>
            </div>

            {/* <div className="w-full md:w-[22%] border border-gray-500 rounded-lg flex flex-row items-center">
           
              <input
                placeholder="Search"
                className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
              />

              <ArrowDropDownIcon
                style={{ fontSize: "28px" }}
                className="text-zinc-500"
              />
            </div> */}
          </Box>

          <Box
            className="w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Grid className="flex flex-row border-b border-zinc-500">
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 md:pt-10">
            <div className="p-2 rounded-lg ">
              <div className="flex items-center gap-0 md:gap-6">
                <p className="text-[12px] text-gray-400">
                  Show Rows: 1-10 of 20
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <KeyboardArrowLeftOutlinedIcon
                className="text-zinc-400 cursor-pointer"
                onClick={handlePrevScreen}
              />
              <p className="text-zinc-400">1</p>
              {currentScreen === 1 ? (
                <KeyboardArrowRightOutlinedIcon
                  className="text-zinc-300 cursor-pointer"
                  onClick={handleNextScreen}
                />
              ) : (
                <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                  2
                </div>
              )}
            </div>
          </div>
        </Box>
      )}

      {tab == "milestone" && (
        <Box
          className="w-[96%]  mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view", marginLeft: "22px" }}
        >
          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center"></div>
          </Box>

          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center">
              <p className="text-[12px] ml-3">Shows</p>
              <select className="appearance-none bg-transparent pl-1 rounded leading-tight focus:outline-none focus:border-gray-500 text-[12px]">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
              <ArrowDropDownIcon fontSize="medium" className="text-zinc-500" />
              <p className="text-[12px]">entries</p>
            </div>

            <div className="flex row">
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center'">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <ArrowDropDownIcon
                  style={{ fontSize: "28px" }}
                  className="text-zinc-500"
                />
              </div>

              <div className="  md:justify-center  ml-[30px]">
                <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Upload Files
                </button>
              </div>
            </div>

            {/* <div className="w-full md:w-[22%] border border-gray-500 rounded-lg flex flex-row items-center">
           
              <input
                placeholder="Search"
                className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
              />

              <ArrowDropDownIcon
                style={{ fontSize: "28px" }}
                className="text-zinc-500"
              />
            </div> */}
          </Box>

          <Box
            className="w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Grid className="flex flex-row border-b border-zinc-500">
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 md:pt-10">
            <div className="p-2 rounded-lg ">
              <div className="flex items-center gap-0 md:gap-6">
                <p className="text-[12px] text-gray-400">
                  Show Rows: 1-10 of 20
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <KeyboardArrowLeftOutlinedIcon
                className="text-zinc-400 cursor-pointer"
                onClick={handlePrevScreen}
              />
              <p className="text-zinc-400">1</p>
              {currentScreen === 1 ? (
                <KeyboardArrowRightOutlinedIcon
                  className="text-zinc-300 cursor-pointer"
                  onClick={handleNextScreen}
                />
              ) : (
                <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                  2
                </div>
              )}
            </div>
          </div>
        </Box>
      )}

      {tab == "Invoice" && (
        <Box
          className="w-[96%]  mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view", marginLeft: "22px" }}
        >
          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center"></div>
          </Box>

          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center">
              <p className="text-[12px] ml-3">Shows</p>
              <select className="appearance-none bg-transparent pl-1 rounded leading-tight focus:outline-none focus:border-gray-500 text-[12px]">
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
              </select>
              <ArrowDropDownIcon fontSize="medium" className="text-zinc-500" />
              <p className="text-[12px]">entries</p>
            </div>

            <div className="flex row">
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center'">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <ArrowDropDownIcon
                  style={{ fontSize: "28px" }}
                  className="text-zinc-500"
                />
              </div>

              <div className="  md:justify-center  ml-[30px]">
                <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Upload Files
                </button>
              </div>
            </div>

            {/* <div className="w-full md:w-[22%] border border-gray-500 rounded-lg flex flex-row items-center">
           
              <input
                placeholder="Search"
                className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
              />

              <ArrowDropDownIcon
                style={{ fontSize: "28px" }}
                className="text-zinc-500"
              />
            </div> */}
          </Box>

          <Box
            className="w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
            sx={{
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            }}
          >
            <Grid className="flex flex-row border-b border-zinc-500">
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-25 md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 md:pt-10">
            <div className="p-2 rounded-lg ">
              <div className="flex items-center gap-0 md:gap-6">
                <p className="text-[12px] text-gray-400">
                  Show Rows: 1-10 of 20
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <KeyboardArrowLeftOutlinedIcon
                className="text-zinc-400 cursor-pointer"
                onClick={handlePrevScreen}
              />
              <p className="text-zinc-400">1</p>
              {currentScreen === 1 ? (
                <KeyboardArrowRightOutlinedIcon
                  className="text-zinc-300 cursor-pointer"
                  onClick={handleNextScreen}
                />
              ) : (
                <div className="bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
                  2
                </div>
              )}
            </div>
          </div>
        </Box>
      )}

      {tab == "Comments" && (
        <Box
          className="w-[96%] mr-[20px] md:ml-0 rounded-lg"
          sx={{ backgroundColor: "background.view", marginLeft: "22px" }}
        >
          <Box
            sx={{
              marginTop: "20px",
              border: "1px solid grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  alt="User"
                  src="data:image/jpeg;base64,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"
                  style={{
                    marginRight: "20px",
                    marginBottom: "94px",
                    height: "40px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold" color="white">
                    Mobile App Update
                  </Typography>
                  <Typography variant="body2" color="gray">
                    <CalendarMonthIcon
                      style={{ marginBottom: "4px", fontSize: "14px" }}
                    />{" "}
                    Mar 10, 2024{" "}
                    <AvTimerIcon
                      style={{ marginBottom: "4px", fontSize: "14px" }}
                    />{" "}
                    15:30PM
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ marginTop: "10px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Est in adipiscing
                    tincidunt viverra. Feugiat consectetur vitae non vestibulum
                    eu et. In ultrices vel ultrices a laoreet semper rhoncus
                    laoreet. Semper non neque malesuada aliquet quam adipiscing.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        marginRight: "10px",
                        backgroundColor: "gray",
                        color: "white",
                      }}
                    >
                      <ChatBubbleOutlineIcon style={{ height: "18px" }} />{" "}
                      Comment
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ backgroundColor: "gray", color: "white" }}
                    >
                      <ReplyIcon style={{ height: "18px" }} />
                      Reply
                    </Button>
                  </Box>
                  <Box></Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
              border: "1px solid grey",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                marginBottom: "20px",
                padding: "20px",
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  alt="User"
                  src="data:image/jpeg;base64,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"
                  style={{
                    marginRight: "20px",
                    marginBottom: "94px",
                    height: "40px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
                <Box>
                  <Typography variant="body1" fontWeight="bold" color="white">
                    Mobile App Update
                  </Typography>
                  <Typography variant="body2" color="gray">
                    <CalendarMonthIcon
                      style={{ marginBottom: "4px", fontSize: "14px" }}
                    />{" "}
                    Mar 10, 2024{" "}
                    <AvTimerIcon
                      style={{ marginBottom: "4px", fontSize: "14px" }}
                    />{" "}
                    15:30PM
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{ marginTop: "10px" }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Est in adipiscing
                    tincidunt viverra. Feugiat consectetur vitae non vestibulum
                    eu et. In ultrices vel ultrices a laoreet semper rhoncus
                    laoreet. Semper non neque malesuada aliquet quam adipiscing.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      marginTop: "10px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        marginRight: "10px",
                        backgroundColor: "gray",
                        color: "white",
                      }}
                    >
                      <ChatBubbleOutlineIcon style={{ height: "18px" }} />{" "}
                      Comment
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ backgroundColor: "gray", color: "white" }}
                    >
                      <ReplyIcon style={{ height: "18px" }} />
                      Reply
                    </Button>
                  </Box>
                  <Box></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewProject;
