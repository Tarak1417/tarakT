import React from 'react';
import hrimage1 from '../assets/Interductionimages/Vector-1.png';
import hrimage2 from '../assets/Interductionimages/Vector-2.png';
import hrimage3 from '../assets/Interductionimages/Vector-3.png';
import hrimage4 from '../assets/Interductionimages/Vector.png';
import characterimage from "../assets/Interductionimages/character.png";
import reload from "../assets/Interductionimages/reaload.png";
import { Box } from '@mui/material';

const Interduction = ({ isSidebarOpen }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.view",
        width: "auto",
        maxWidth: "2000px",  // Adjust maxWidth for a smaller container
        height: '200px',      // Let height be dynamic for better responsiveness
        borderRadius: '10px',
        padding: "5px",      // Adjust padding as needed
        boxSizing: "border-box"
      }}
      className="rounded-[10px] m-2 flex flex-col items-center"
    >
      {/* Header section with icons */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-1 md:p-6">
        <h6 className="text-xl text-center md:text-left mr-2px md:mb-0">Introduction</h6>
        <div className="flex gap-3 md:gap-4 mt-2 md:mt-0">
          <img src={hrimage1} alt="Vector 1" className="w-4 h-4 text-gray-500" />
          <img src={hrimage2} alt="Vector 2" className="w-4 h-4 text-gray-500" />
          <img src={hrimage3} alt="Vector 3" className="w-4 h-4 text-gray-500" />
          <img src={hrimage4} alt="Vector 4" className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      
      {/* Content section */}
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center md:justify-evenly w-full ">
        <img src={characterimage} alt="Character" className="w-16 h-16 mb-2 md:mb-0 md:mr-6" />
        <div className="text-center md:text-left mt-2 md:mt-0">
          <h1 className="text-xl font-bold">
            Welcome to Clikkle <span className="text-[#3767B1]">HR, Rohit!</span>
          </h1>
          <p className="text-[12px]">
            We’re excited to have you here. Start with our <span className="text-[#3767B1]">Clikkle HR 101 guide</span> or <span className="text-[#3767B1]">training course</span> to dive right in.
          </p>
          <p className="mt-2 text-[12px]">
            And remember, you can <span className="text-[#3767B1]">customize this space</span> anytime in Administration. Welcome aboard!
          </p>
        </div>
      </div>

      {/* Reload section aligned to the right for desktop, centered for mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-end w-full gap-1 text-gray-500 text-[10px] mt-2 mr-2">
        <img src={reload} alt="Reload Icon" className="h-3 w-3 md:h-4 md:w-4" />
        <p>just now</p>
      </div>
    </Box>
  );
};

export default Interduction;
