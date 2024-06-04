import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

let walkover = [
  {
    image: "walkover1.png",
    title: "Effortless application Management",
    descriptions:
      "Track the progress of job applications from the issuance of offer letters to interview invitations ensuring a streamlined and organized hiring process",
    width: 500,
  },

  {
    image: "walkover2.png",
    title: "Precise Attendance Tracking",
    descriptions:
      "Clikkle HR allows you to effortlessly record daily attendance with detailed notes providing a comprehensive overview of employee activities",
    width: 500,
  },
  {
    image: "walkover3.png",
    title: "Dynamic Job List Creation and Editing",
    descriptions:
      "Create and edit job details effortlessly, ensuring that your team has access to the most up-to-date information for effective collaboration",
    width: 600,
  },
  {
    image: "walkover4.png",
    title: "  Recognition and Rewards",
    descriptions:
      " Recognize outstanding contributions and motivate your Workforce with a dedicated platform for acknowledging accomplishments",
    width: 600,
  },
];

const WalkoverHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let logoSrc = "https://cdn.clikkle.com/images/hr/logo/2023/hr.png",
    name = "Clikkle",
    smallerText = false;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleGoToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box className="w-screen h-screen flex items-center justify-center overflow-x-hidden relative  bg-white">
      <Box className="hidden sm:flex absolute w-full h-full flex items-center justify-center">
        <div className="absolute right-0 w-full h-full scale-125 bg-[#ebfbff] rounded-full transform translate-x-[76%]"></div>
      </Box>
      <div className="z-10 flex sm:flex-row-reverse flex-col w-full h-full sm:justify-between">
        <div className="py-10 px-6 text-right block  sm:hidden   ">Skip</div>
        <div className="w-full h-1/3 sm:h-full sm:w-1/2 flex items-center justify-center">
          <div className="w-4/6  sm:w-auto">
            <img
              className=" origin-center"
              style={{ width: walkover[currentIndex].width }}
              src={"/images/ASSETS/" + walkover[currentIndex].image}
              alt={name}
            />
          </div>
        </div>
        <div className=" w-full h-1/2  sm:h-full sm:w-1/2 sm:pl-16 py-10">
          <div className="hidden sm:flex items-center">
            <img className={`w-14 `} src={logoSrc} alt={name} />
            <h1
              className={`text-gray-400 mx-2 dark:text-white text-center align-middle sm:text-xl md:text-xl lg:text-xl font-normal text-sm`}
            >
              <span className="text-gray-500 font-medium"> Clikkle </span> Hr
              Platform
            </h1>
          </div>
          <div className="h-[65%] sm:mt-0 mt-3 w-4/6 sm:w-full sm:text-left sm:pr-2 m-auto text-center flex flex-col sm:justify-end justify-center">
            <div className="text-2xl sm:text-5xl">
              {walkover[currentIndex].title}
            </div>
            <div className="my-5">
              <div className="font-medium text-gray-500 text-xs sm:text-xl">
                {walkover[currentIndex].descriptions}
              </div>
            </div>

          </div>  
          {currentIndex === 3 && (
              <div className=" flex justify-center mb-4 sm:hidden">
                <Button
                  className=" w-5/6  sm:w-2/6"
                  onClick={handleGoToCheckout}
                  variant="contained"
                  sx={{ borderRadius: 3, px: 3, py: 1.5 }}
                >
                  Get Started
                </Button>
              </div>
            )}
         
          <div className="h-[30%] flex flex-row-reverse sm:flex-col justify-between ">
            {currentIndex === 3 && (
              <div className="hidden sm:block">
                <Button
                  className="mb-2 w-2/6"
                  onClick={handleGoToCheckout}
                  variant="contained"
                  sx={{ borderRadius: 3, px: 3, py: 1.5 }}
                >
                  Get Started
                </Button>
              </div>
            )}
            <div className="flex mt-2 gap-4">
              <div className="p-px w-fit h-fit rounded-full bg-gray-300">
                <IconButton
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  color="primary"
                  className="rounded-full"
                >
                  <ArrowBackIos />
                </IconButton>
              </div>
              <div className="p-px w-fit h-fit rounded-full bg-gray-300">
                <IconButton
                  disabled={currentIndex === 3}
                  onClick={handleNext}
                  color="primary"
                  className="rounded-full"
                >
                  <ArrowForwardIos />
                </IconButton>
              </div>
            </div>
            <Box className="flex mt-10">
              {[0, 1, 2, 3].map((_, index) => (
                <Box
                  key={index}
                  className={`mx-1 transition-all h-3 duration-300 ${
                    currentIndex === index
                      ? "w-8  bg-blue-500"
                      : "w-3  bg-gray-300"
                  } rounded-full`}
                ></Box>
              ))}
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default WalkoverHeader;
