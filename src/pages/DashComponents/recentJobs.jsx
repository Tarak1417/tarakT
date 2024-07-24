import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SwipeDownAlt } from "@mui/icons-material";

const RecentJobs = ({ items }) => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [setSelectedYear] = useState("2024");

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdown1Open(false);
    setDropdown2Open(false);
  };

  return (
    <Box
      className="rounded-lg mb-4 shadow-md pt-4 pr-4 pb-4"
      sx={{
        backgroundColor: "background.view",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
        <div className="w-full md:w-1/2 flex justify-left">
          <Typography className="w-full md:w-1/3 border-l-4 border-blue-500 pl-2 whitespace-nowrap text-xl">
            Recent Job Application
          </Typography>
        </div>
        <div className="w-full md:w-1/2 gap-2 flex flex-row">
          <div className="border border-gray-600 rounded-lg p-1 w-1/2">
            <div className="w-full flex justify-between items-center">
              <Typography className="text-xl">Monthly</Typography>
              <KeyboardArrowDownIcon
                className="cursor-pointer text-9333ea"
                onClick={toggleDropdown1}
              />
              {dropdown1Open && (
                <div className="absolute top-10 right-0 mt-1 w-20 md:w-40 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                  <div className="p-2 flex flex-col gap-2 justify-center items-center">
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2024")}
                    >
                      Option 1
                    </Typography>
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2023")}
                    >
                      Option 2
                    </Typography>
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2023")}
                    >
                      Option 3
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border border-gray-600 rounded-lg p-1 w-1/2">
            <div className="w-full flex justify-between items-center">
              <Typography className="text-xl">All jobs</Typography>
              <KeyboardArrowDownIcon
                className="cursor-pointer text-9333ea"
                onClick={toggleDropdown2}
              />
              {dropdown2Open && (
                <div className="absolute top-10 right-0 mt-1 w-20 md:w-40 bg-neutral-900 rounded-lg border border-gray-600 z-10">
                  <div className="p-2 flex flex-col gap-2 justify-center items-center">
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2024")}
                    >
                      Option A
                    </Typography>
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2023")}
                    >
                      Option B
                    </Typography>
                    <Typography
                      variant="h7"
                      className="cursor-pointer"
                      onClick={() => handleYearSelect("2023")}
                    >
                      Option C
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        { items && items ? items?.map((item, index) => (
          <div
            key={index}
            className="flex flex-row mb-4 gap-1 md:gap-0"
            style={{ overflowX: "scroll" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="w-1/6 md:w-1/6 flex items-center justify-center"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              >
                <AccountCircleIcon fontSize="large" />
              </div>
              <div className="w-1/3 md:w-1/3">
                <h1
                  className="text-sm truncate md:text-lg text-gray-400"
                  style={{ fontSize: "12px", marginBottom: "-10px" }}
                >
                  {item.fullName}
                </h1>
                <p
                  className="w-1/3 md:w-1/3 text-sm  text-zinc-500"
                  style={{ fontSize: "12px" }}
                >
                  {item.email.length > 10
                    ? `${item.email.slice(0, 13)}...`
                    : item.email}
                </p>
              </div>
            </div>
            <div className="w-1/5 md:w-1/5 flex items-center justify-start md:items-center md:justify-center">
              <p className="text-sm text-zinc-500">{item?.experience}</p>
            </div>
            <div className="w-1/3 md:w-1/5 flex items-center justify-start md:items-center md:justify-center">
              <p className="text-sm text-zinc-500" style={{ whiteSpace: "nowrap" }}>
                 {item?.jobTitle?.length > 10 
                ? `${item?.jobTitle?.slice(0, 10)}...`
                : item?.jobTitle
                }
              </p>
            </div>
            <div className="w-1/4 md:w-1/4 gap-2 flex items-center justify-start md:items-center md:justify-center whitespace-nowrap">
              <CallIcon className="text-green-700" />
              <EmailIcon className="text-green-700" />
              <DeleteIcon className="text-red-700 " />
            </div>
          </div>
          

        ))
      :
      "Loading..."
      }
      </div>
    </Box>
  );
};

export default RecentJobs;
