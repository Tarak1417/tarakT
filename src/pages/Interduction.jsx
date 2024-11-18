import React from 'react';
import hrimage2 from '../assets/Interductionimages/Vector-2.png';
import hrimage3 from '../assets/Interductionimages/Vector-3.png';
import hrimage4 from '../assets/Interductionimages/Vector.png';
import characterimage from "../assets/Interductionimages/character.png";
import reload from "../assets/Interductionimages/reaload.png";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Clock from "../components/Clock";
import { Grid } from "@mui/material";

const Interduction = ({ isSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: "calc(100% - 30px)", // Adjusts to make it slightly narrower
        margin: "5px auto", // Centers the component
        padding: "10px", // Adds padding within the component to avoid cramping
        backgroundColor: "background.default",
        marginBottom: "12px",
      }}
      className="rounded-[10px] m-2 flex flex-col items-center sm:flex-col"
    >
      {/* Header section with icons */}
      <div className="flex flex-row items-center justify-between w-full p-1 mt-[-30px]">
        <h6 className="text-bold md:text-left md:mb-0">Introduction</h6>
        <div className="flex gap-1 md:gap-3 items-center">
          <Grid container display="flex" justifyContent="space-between" alignItems="center">
            <Clock />
          </Grid>
          <img src={hrimage2} alt="Vector 2" className="w-4 h-4 text-gray-500" />

          {isMobile ? <img src={hrimage3} alt="Vector 4" className="w-4 h-4 text-gray-500" />:<img src={hrimage3} alt="Vector 4" className="w-4 h-4 text-gray-500" />}
        </div>
      </div>

      {/* Content section */}
      <div className={`flex flex-col md:flex-row ${isMobile ? 'items-center justify-center' : 'items-center justify-start mt-[-30px]'} w-full p-2`}>
        <img src={characterimage} alt="Character" className={`w-20 h-auto ${isMobile ? "" : "mt-[10px]"} md:mb-0 md:mr-3`} />
        <div className={`text-center md:text-left ${isMobile ? "ml-2" : "py-[10px] ml-5"} md:mt-0`}>
          <h1 className="text-xl font-bold whitespace-normal">
            Welcome to Clikkle HR, {isMobile ? (
              <span className="text-[#3767B1]"><br />{JSON.parse(localStorage.getItem("user")).firstName}!</span>
            ) : (
              <span className="text-[#3767B1]">{JSON.parse(localStorage.getItem("user")).firstName}!</span>
            )}
          </h1>
          <p className="text-[10px] whitespace-normal">
            We’re excited to have you here. Start with our <span className="text-[#3767B1]">Clikkle HR 101 guide</span> or <span className="text-[#3767B1]">training course</span> to dive right in.
          </p>
          <p className="mt-2 text-[12px]">
            And remember, you can <span className="text-[#3767B1]">customize this space</span> anytime in Administration. Welcome aboard!
          </p>
        </div>
      </div>

      {isMobile && <hr className="w-full border-t border-gray-300 opacity-65 my-2" />}

      <div className={`flex items-end w-full gap-1 text-gray-500 text-[10px] mt-1 ${isMobile ? 'justify-end mr-10 mb-2' : 'justify-end mr-2 mt-[-15px] mb-2'}`}>
        <img src={reload} alt="Reload Icon" className="h-3 w-3 md:h-4 md:w-4" />
        <p>just now</p>
      </div>
    </Box>
  );
};

export default Interduction;