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
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import view from "../ReceivedApp/viewicon.png";
import AttendViewPage from "../Attendance/AttendView/AttendViewPage";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "../../../src/style/theme";
import ProjectNote from "./ProjectNote";
import ReactQuill from 'react-quill';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

const ViewProject = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [text, setText] = useState('');
  const [messageTab, setMessageTab] = useState(false);
  const [messageTab1, setMessageTab1] = useState(false);
  const { toggleTheme, mode } = useTheme();
  console.log(mode);

  const showMessageTab = () => {
    setMessageTab(!messageTab);
  };
  const showMessageTab1 = () => {
    setMessageTab1(!messageTab1);
  };
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

  const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link'],
        ['clean'],
    ],
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
];

const handleChange = value => {
    setText(value);
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
    <Box sx={{ backgroundColor: "background.main", height: "100%" }}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between md:w-full p-4">
          <div className="p-2">
            <h1 className="text-xs md:text-2xl text-neutral-500">
              Project List
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="flex  items-center text-white font-bold text-[8px] md:text-[16px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700">
              Create New Project
            </button>
            <InfoOutlinedIcon />
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-[-31px]">
        <div
          className="flex items-center flex-nowrap overflow-x-auto p-4"
          style={{
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
          }}
        >
          <style jsx>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="p-2 ml-2 hide-scrollbar">
            <p className="text-[15px] md:text-[15px] text-neutral-200">
              OverView
            </p>
          </div>
          {tab === "task" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("task")}
            >
              <h1 className="text-[14px] md:text-[15px] w-[50px] text-center">
                Task
              </h1>
            </div>
          ) : (
            <div className="p-2 ml-2" onClick={() => handleTabChange("task")}>
              <h1 className="text-[14px] md:text-[15px] w-[50px] text-center">
                Task
              </h1>
            </div>
          )}
          {tab === "files" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("files")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center">Files</h1>
            </div>
          ) : (
            <div className="p-2 ml-2" onClick={() => handleTabChange("files")}>
              <h1 className="text-[14px] md:text-[15px] text-center text-neutral-500">
                Files
              </h1>
            </div>
          )}
          {tab === "milestone" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("milestone")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center">
                milestone
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={() => handleTabChange("milestone")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center text-neutral-500">
                milestone
              </h1>
            </div>
          )}
          {tab === "Comments" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("Comments")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center">
                Comments
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={() => handleTabChange("Comments")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center text-neutral-500">
                Comments
              </h1>
            </div>
          )}
           {tab === "note" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("note")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center">
                Note
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={() => handleTabChange("note")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center text-neutral-500">
                Note
              </h1>
            </div>
          )}
          {tab === "Invoice" ? (
            <div
              className="p-2 ml-2 bg-blue-500 text-white rounded-t-md"
              onClick={() => handleTabChange("Invoice")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center">
                Invoice
              </h1>
            </div>
          ) : (
            <div
              className="p-2 ml-2"
              onClick={() => handleTabChange("Invoice")}
            >
              <h1 className="text-[14px] md:text-[15px] text-center text-neutral-500">
                Invoice
              </h1>
            </div>
          )}
        </div>
      </div>

      {tab == "task" && (
        <Box
          className="w-[100%] h-[65vh]  md:w-[96%]  md:ml-[20px] ml-[0px] md:mr-[20px] mr-[0px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view" }}
        >
          <Box className="flex flex-col md:flex-row justify-between gap-4 mt-4 w-[97%] ml-2 md:ml-4 ">
            <div className="w-full md:w-[21%] flex justify-start items-center"></div>
          </Box>

          <Box className="flex  md:flex-row justify-between gap-4  w-[97%] ml-2 md:ml-4 mt-[25px]">
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

            <div className="w-1/2 md:w-[22%] border border-gray-500 rounded-lg flex flex-row items-center">
              <input
                placeholder="Search"
                className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
              />
              <SearchIcon
                style={{ fontSize: "20px" }}
                className="text-zinc-500"
              />
            </div>
          </Box>

          <Box
            className="h-[45vh] w-[97%] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
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
              <div className="w-auto min-w-[50px] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                No
              </div>
              <div className="w-auto min-w-[150px] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Task
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] text-nowrap p-2 border-r border-zinc-500 text-sm md:text-[16px] font-bold">
                Assigned To
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-[16px] font-bold">
                Priority
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] text-nowrap p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Start Date
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-[16px] font-bold">
                Deadline
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-[16px] font-bold">
                Status
              </div>
              <div className="w-auto min-w-[100px] md:w-[14.6%] border-b  md:border-b-0 border-zinc-500 p-2 text-left text-sm md:text-[16px] font-bold">
                Action
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-auto min-w-[50px] md:w-[14.6%] p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-auto min-w-[150px] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-zinc-500 text-sm md:text-xs flex items-center">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s"
                        alt="Assigned To"
                        style={{ height: "20px", borderRadius: "50%" }}
                      />
                    </div>
                    <div style={{ marginLeft: "3px", marginTop: "1px" }}>
                      <p>Emma Stone</p>
                    </div>
                  </div>
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-xs flex items-center">
                  <div
                    className={`px-1 py-1 rounded-lg w-3/5 flex justify-center items-center ${
                      getColor(user.status).bgColor
                    } ${getColor(user.status).textColor}`}
                  >
                    {user.status}
                  </div>
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.clockIn}
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-xs flex items-center">
                  {user.clockOut}
                </div>
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 text-sm md:text-xs flex items-center">
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
                <div className="w-auto min-w-[100px] md:w-[14.6%] p-2 border-r border-b md:border-b-0 border-zinc-500 flex justify-center text-sm md:text-xs">
                  <IconButton> {user.action}</IconButton>
                  <IconButton> {user.action}</IconButton>
                  <IconButton> {user.action}</IconButton>
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between pt-[10px] w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 ">
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
          className="w-[96%] h-[66vh] m-auto  md:mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view" }}
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
              <div className="  md:justify-center ">
                <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Upload Files
                </button>
              </div>
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center  ml-[30px]">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <SearchIcon
                  style={{ fontSize: "20px" }}
                  className="text-zinc-500"
                />
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
            className="w-[97%] h-[32vh] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 "
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
              <div className="w-auto min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
                currentScreen={currentScreen}
              >
                <div className="w-auto min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>
          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 ">
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

      {
        tab == "note" && (
          <Box
          className="md:w-[96%] md:mr-[20px] md:ml-0 rounded-lg w-full mt-[-55px]"
          sx={{
            backgroundColor: "background.view",
            marginLeft: { xs: 0, md: "22px" },
            marginRight: { xs: 0, md: "20px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.view",
              marginLeft: { xs: 0, md: "22px" },
              marginRight: { xs: 0, md: "20px" },
            }}
          >
            <div style={{ marginTop: "30px", marginBottom: "14px" }}>
              <Typography variant="subtitle1" component="p" marginLeft={2} mb={2} mt={5} padding={1}>
                Select Departments
              </Typography>
              <input
               className={`border border-gray-500 h-[70px] p-[20px] w-full md:w-[96%] md:mr-[20px] md:ml-[20px] rounded-lg ${mode === 'dark' ? 'bg-[#141414]' : ''}`}
                placeholder="Enter Title"
                
              />
            </div>
            <Typography variant="subtitle1" component="p" marginLeft={2} padding={1}>
              Note
            </Typography>
            <div>
              <ReactQuill
                value={text}
                modules={modules}
                formats={formats}
                onChange={handleChange}
                className="richtextWrap h-[200px] p-[20px] w-full rounded-lg"
                placeholder="Enter Title"
              />
            </div>
            <div className="flex flex-row items-center justify-end gap-4 md:mr-[20px] mt-[50px] mb-[20px]">
              <button className="flex items-center text-white font-bold text-[8px] mb-[20px] md:text-[17px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700">
                Submit
              </button>
            </div>
          </Box>
        </Box>
        )
      }

      

      {tab == "milestone" && (
        <Box
          className="w-[96%] h-[66vh] m-auto  md:mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view" }}
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

            <div className="flex row ">
              <div className="  md:justify-center  ">
                <button className="bg-sky-500 hover:bg-blue-700 text-nowrap text-white font-bold py-2 px-4 rounded">
                  Add Milestone
                </button>
              </div>
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center ml-[30px]">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <SearchIcon
                  style={{ fontSize: "20px" }}
                  className="text-zinc-500"
                />
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
            className="w-[97%] h-[32vh] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 h-[380px]"
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
              <div className="w-auto min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
              >
                <div className="w-auto min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="w-auto min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 ">
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
          className="w-[100%] md:w-[96%] h-[66vh]  md:mr-[20px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view" }}
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

            <div className="flex row ">
              <div className="  md:justify-center  ">
                <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add Invoice
                </button>
              </div>
              <div className=" border border-gray-500 rounded-lg flex flex-row items-center ml-[30px]">
                <input
                  placeholder="Search"
                  className="appearance-none bg-transparent w-[75%] text-white-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none text-[15px] focus:border-gray-500"
                />
                <SearchIcon
                  style={{ fontSize: "20px" }}
                  className="text-zinc-500"
                />
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
            className="w-[97%] h-[32vh] ml-2 md:ml-4 border border-zinc-500 rounded-sm mt-10 "
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
              <div className="min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                ID
              </div>
              <div className="min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Project Title
              </div>
              <div className="min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Client
              </div>
              <div className="min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-[16px] font-bold">
                Team
              </div>
            </Grid>
            {userData.map((user, index) => (
              <Grid
                key={index}
                className="flex flex-row border-b border-zinc-500"
              >
                <div className="min-w-[50px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Id}
                </div>
                <div className="min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Project}
                </div>
                <div className="min-w-[150px] md:w-1/4 p-2 border-r border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Client}
                </div>
                <div className="min-w-[150px] md:w-1/4 p-2 border-r border-b md:border-b-0 border-zinc-500 text-left text-sm md:text-xs flex items-center">
                  {user.Team}
                </div>
              </Grid>
            ))}
          </Box>

          <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-4 ">
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
          className="w-[100%] h-[72vh] md:h-[66vh] no-scrollbar overflow-hidden overflow-y-scroll mt-[16px]  md:w-[96%]  md:ml-[20px] ml-[0px] md:mr-[20px] mr-[0px] md:ml-0  rounded-lg "
          sx={{ backgroundColor: "background.view" }}
        >
          <Box
            sx={{
              marginX: "27px",
              border: "1px solid gray",
              borderRadius: "15px",
              marginY: "30px",
              padding: "20px",
            }}
          >
            <div className=" md:flex gap-2">
              <div className="md:w-[5%]">
                <img
                  className="h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div className="" style={{}}>
                <h2 className="text-lg">Mobile App Developement</h2>
                <p>
                  <span className="text-xs text-gray-400 mr-2">
                    <CalendarTodayIcon sx={{ fontSize: "12px" }} /> Mar 11, 2024
                  </span>
                  <span className="text-xs text-gray-400 mr-2">
                    <AvTimerIcon sx={{ fontSize: "14px" }} /> 10:00AM
                  </span>
                </p>
                <p className="mt-5 text-xs md:w-[75%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores eos qui eius molestiae architecto, ullam autem
                  laborum labore earum id iure ad impedit voluptate deserunt
                  facilis quidem.
                </p>
                <div className={"mt" - 5}>
                  <Button
                    onClick={showMessageTab}
                    sx={{
                      backgroundColor: mode === "dark" ? "#202021" : "#e2e0e0",
                      color: "gray",
                      fontSize: "12px",
                      marginRight: "25px",
                      borderRadius: "8px",
                      padding: "7px 10px",
                      border: "1px",
                    }}
                  >
                    <MapsUgcIcon sx={{ marginRight: "4px" }} /> Comment
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: mode === "dark" ? "#202021" : "#e2e0e0",
                      color: "gray",
                      fontSize: "12px",
                      marginRight: "25px",
                      borderRadius: "8px",
                      padding: "7px 10px",
                      border: "1px",
                    }}
                  >
                    <ReplyIcon sx={{ marginRight: "4px" }} /> Reply
                  </Button>
                </div>
                {messageTab && (
                  <div
                    className={`  ${
                      mode === "dark" ? "bg-[#202021]" : "e2e0e0"
                    }, p-5  mt-[30px] rounded-[15px]  md:w-[87%] rounded-lg border border-zinc-500`}
                  >
                    {" "}
                    <div className="md:flex gap-2">
                      <div className="md:w-[8%]">
                        <img
                          className="h-[50px] w-[50px] rounded-[50%]"
                          src="https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h2 className="text-base">Mobile App Developement</h2>
                        <p>
                          <span className="text-[12px] text-gray-400 mr-2">
                            <CalendarTodayIcon sx={{ fontSize: "12px" }} /> Mar
                            11, 2024
                          </span>
                          <span className="text-[12px] text-gray-400 ">
                            <AvTimerIcon sx={{ fontSize: "12px" }} /> 10:00AM
                          </span>
                        </p>
                        <p className="mt-5 text-xs ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Asperiores eos qui eius molestiae architecto,
                          ullam autem laborum labore earum id iure ad impedit
                          voluptate deserunt facilis quidem.
                        </p>
                        <div className="mt-5">
                          <Button
                            sx={{
                              backgroundColor:
                                mode === "dark" ? "#202021" : "#e2e0e0",
                              color: "gray",
                              fontSize: "10px",
                              marginRight: "25px",
                              borderRadius: "8px",
                              padding: "5px 8px",
                            }}
                          >
                            <MapsUgcIcon sx={{ marginRight: "4px" }} /> Comment
                          </Button>
                          <Button
                            sx={{
                              padding: "5px 8px",

                              backgroundColor:
                                mode === "dark" ? "#202021" : "#e2e0e0",
                              color: "gray",
                              fontSize: "10px",
                              borderRadius: "8px",
                            }}
                          >
                            <ReplyIcon sx={{ marginRight: "4px" }} /> Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Box>
          <Box
            sx={{
              marginX: "27px",
              border: "1px solid gray",
              borderRadius: "15px",
              marginY: "30px",
              padding: "20px",
            }}
          >
            <div className=" md:flex gap-2">
              <div className="md:w-[5%]">
                <img
                  className="h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="text-lg">Mobile App Developement</h2>
                <p>
                  <span className="text-xs text-gray-400 mr-2">
                    <CalendarTodayIcon sx={{ fontSize: "12px" }} /> Mar 11, 2024
                  </span>
                  <span className="text-xs text-gray-400 mr-2">
                    <AvTimerIcon sx={{ fontSize: "14px" }} /> 10:00AM
                  </span>
                </p>
                <p className="mt-5 text-xs md:w-[75%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores eos qui eius molestiae architecto, ullam autem
                  laborum labore earum id iure ad impedit voluptate deserunt
                  facilis quidem.
                </p>
                <div className="mt-5">
                  <Button
                    onClick={showMessageTab1}
                    sx={{
                      backgroundColor: mode === "dark" ? "#202021" : "#e2e0e0",
                      color: "gray",
                      fontSize: "12px",
                      marginRight: "25px",
                      borderRadius: "8px",
                      padding: "7px 10px",
                    }}
                  >
                    <MapsUgcIcon sx={{ marginRight: "4px" }} /> Comment
                  </Button>
                  <Button
                    sx={{
                      padding: "7px 10px ",

                      backgroundColor: mode === "dark" ? "#202021" : "#e2e0e0",
                      color: "gray",
                      fontSize: "12px",
                      borderRadius: "8px",
                    }}
                  >
                    <ReplyIcon sx={{ marginRight: "4px" }} /> Reply
                  </Button>
                </div>
                {messageTab1 && (
                  <div
                    className={`  ${
                      mode === "dark" ? "bg-[#202021]" : "e2e0e0"
                    }, p-5  mt-[30px] rounded-[15px] md:w-[87%] rounded-lg border border-zinc-500`}
                  >
                    {" "}
                    <div className="md:flex gap-2">
                      <div className="md:w-[8%]">
                        <img
                          className="h-[50px] w-[50px] rounded-[50%]"
                          src="https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h2 className="text-base">Mobile App Developement</h2>
                        <p>
                          <span className="text-[12px] text-gray-400 mr-2">
                            <CalendarTodayIcon sx={{ fontSize: "12px" }} /> Mar
                            11, 2024
                          </span>
                          <span className="text-[12px] text-gray-400 ">
                            <AvTimerIcon sx={{ fontSize: "12px" }} /> 10:00AM
                          </span>
                        </p>
                        <p className="mt-5 text-xs ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Asperiores eos qui eius molestiae architecto,
                          ullam autem laborum labore earum id iure ad impedit
                          voluptate deserunt facilis quidem.
                        </p>
                        <div className="mt-5">
                          <Button
                            sx={{
                              backgroundColor:
                                mode === "dark" ? "#202021" : "#e2e0e0",
                              color: "gray",
                              fontSize: "10px",
                              marginRight: "25px",
                              borderRadius: "8px",
                              padding: "5px 8px",
                            }}
                          >
                            <MapsUgcIcon sx={{ marginRight: "4px" }} /> Comment
                          </Button>
                          <Button
                            sx={{
                              padding: "5px 8px",

                              backgroundColor:
                                mode === "dark" ? "#202021" : "#e2e0e0",
                              color: "gray",
                              fontSize: "10px",
                              borderRadius: "8px",
                            }}
                          >
                            <ReplyIcon sx={{ marginRight: "4px" }} /> Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Box>

          <div className="w-[90%]">
            <div className="d-flex flex-coloumn">
              <div className="" style={{ margin: "auto" }}>
                <input
                  placeholder="Enter Title"
                  className="appearance-none bg-transparent w-[100%] md:w-[96%] md:ml-[20px] md:mr-[20px] ml-[20px] mr-[20px] text-white-700 py-2 px-4 pr-8   h-[50px] rounded leading-tight focus:outline-none text-[15px] border border-zinc-500"
                />
              </div>
              <div className="mt-[20px]">
                <textarea
                  placeholder="Enter Comments"
                  className="appearance-none bg-transparent w-[100%] md:w-[96%] md:ml-[20px] md:mr-[20px] ml-[20px] mr-[20px] text-white-700 py-2 px-4 pr-8   h-[120px]  pt-[20px] rounded leading-tight focus:outline-none text-[15px] border border-zinc-500"
                />
              </div>
            </div>
            <div className="flex justify-end md:justify-end">
              <button className="flex items-center text-white font-bold text-[8px]  mt-[10px] mb-[10px] md:text-[16px] py-1 md:py-1 px-2 md:px-3 md:mr-[24px] rounded bg-sky-500 hover:bg-sky-700">
                Send Comment
              </button>
            </div>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default ViewProject;