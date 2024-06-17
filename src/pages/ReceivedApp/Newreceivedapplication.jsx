import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import Overview from "./Overview";
import OverviewCards from "./JobCards";
import { Box } from "@mui/material";

const Newreceivedapplication = () => {
  return (
    <div className=" rounded-lg overscroll-auto overflow-hidden">
      <div className="flex items-center justify-between md:w-full p-2">
        <div className="p-2">
          <h1 className="text-2xl text-neutral-500">Received Applications</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <InfoOutlinedIcon />
        </div>
      </div>
      <Box
        className="md:w-[98%] p-4 flex flex-col gap-4  rounded-lg mx-4"
        sx={{ backgroundColor: "background.view" }}
      >
        <h1 className="text-sm md:text-lg text-zinc-400">
          Job Application Overview
        </h1>
        <Overview />
      </Box>
      <OverviewCards />
      <div className="flex items-center justify-between w-[80%] md:w-[92%] md:mx-4 pl-5 md:pl-0 pt-2">
        <div className="p-2 rounded-lg ">
          <div className="flex items-center  gap-0 md:gap-6"></div>
        </div>
        <div className="flex flex-row gap-4">
          <KeyboardArrowLeftOutlinedIcon className="text-zinc-300" />
          <p className="text-zinc-300">1</p>
          <p className="text-zinc-300 bg-blue-500 w-[20px] h-[20px] flex items-center justify-center p-1 rounded-full">
            2
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newreceivedapplication;
