import React,{useState} from 'react';
import hrimage2 from '../assets/Interductionimages/Vector-2.png';
import hrimage3 from '../assets/Interductionimages/Vector-3.png';
import hrimage4 from '../assets/Interductionimages/Vector.png';
import hrimage1 from '../assets/Interductionimages/Vector-1.png';
import characterimage from "../assets/Interductionimages/character.png";
import reload from "../assets/Interductionimages/reaload.png";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Clock from "../components/Clock";
import { Grid } from "@mui/material";
import useExpandCollapse from '../hooks/useExpandCollapse';
import useFullscreenExpand from '../hooks/useFullscreenExpand';




const Interduction = ({ isSidebarOpen }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isHovered, setIsHovered] = useState(false);

 

  return (
    <Box
      sx={{
        width: "calc(100% - 30px)",
       
        margin: "5px auto", // Centers the component
        padding: "10px", 
        backgroundColor: "background.default",
        marginBottom: "12px",
      }}
      className="rounded-[10px] m-2 flex flex-col items-center sm:flex-col expandable-div"
    >
      {/* Header section with icons */}
      <div className="flex flex-row items-center justify-between w-full p-1 mt-[-26px] collapsible-main ">
        <h6 className="text-bold md:text-left md:mb-0">Introduction</h6>
        <div className="flex gap-1 md:gap-2 items-center">
          <Grid container display="flex" justifyContent="space-between" alignItems="center">
            <Clock />
          </Grid>
          <div
    style={{ position: "relative", display: "inline-block" }}
    onMouseEnter={() => setIsHovered("minimize")}
    onMouseLeave={() => setIsHovered(null)}
  >
    <img src={hrimage4} alt="Minimize" className="h-3 w-3 collapse-div" />
    {isHovered === "minimize" && (
      <div
        style={{
          position: "absolute",
          top: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#2f456c",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "3px",
          fontSize: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          whiteSpace: "nowrap",

        }}
      >
        Minimize
      </div>
    )}
  </div>

  {/* Hover effect for Maximize icon (hrimages1) */}
  {!isMobile && (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsHovered("maximize")}
      onMouseLeave={() => setIsHovered(null)}
    >
      <img src={hrimage1} alt="Maximize" className="h-3 w-3 expand-button" />
      {isHovered === "maximize" && (
        <div
          style={{
            position: "absolute",
            top: "-28px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#2f456c",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "3px",
            fontSize: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            whiteSpace: "nowrap",
          }}
        >
          Maximize
        </div>
      )}
    </div>
  )}

  {/* Hover effect for Refresh icon (hrimages2) */}
  <div
    style={{ position: "relative", display: "inline-block" }}
    onMouseEnter={() => setIsHovered("refresh")}
    onMouseLeave={() => setIsHovered(null)}
  >
    <img src={hrimage2} alt="Refresh" className="h-3 w-3" />
    {isHovered === "refresh" && (
      <div
        style={{
          position: "absolute",
          top: "-28px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "#2f456c",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "3px",
          fontSize: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          whiteSpace: "nowrap",
        }}
      >
        Refresh
      </div>
    )}
  </div>

  {/* Hover effect for Settings icon (hrimages3) */}
  <div
    style={{ position: "relative", display: "inline-block" }}
    onMouseEnter={() => setIsHovered("settings")}
    onMouseLeave={() => setIsHovered(null)}
  >
    <img src={hrimage3} alt="Settings" className="h-3 w-3" />
    {isHovered === "settings" && (
      <div
        style={{
          position: "absolute",
          top: "-28px",
          left: "-10px",
          transform: "translateX(-50%)",
          backgroundColor: "#2f456c",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "3px",
          fontSize: "10px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          whiteSpace: "nowrap",
        }}
      >
       copy link
      </div>
    )}
  </div>
        </div>
      </div>

      {/* Content section */}
      <div
  className={`flex  collapsible-div  ${
    isMobile ? "flex-col items-center" : "flex-row items-center"
  } justify-between mt-[-30px] w-full p-2`}
>
  <div className="flex flex-col items-center md:flex-row">
    <img
      src={characterimage}
      alt="Character"
      className={`w-20 h-auto ${
        isMobile ? "mb-2" : "mt-[10px]"
      } md:mb-0 md:mr-3`}
    />
    <div
      className={`text-center md:text-left ${
        isMobile ? "ml-0" : "py-[10px] ml-5"
      } md:mt-0`}
    >
      <h1 className="text-xl font-bold whitespace-normal">
        Welcome to Clikkle HR,{" "}
        {isMobile ? (
          <span className="text-[#3767B1]">
            <br />
            {JSON.parse(localStorage.getItem("user")).firstName}!
          </span>
        ) : (
          <span className="text-[#3767B1]">
            {JSON.parse(localStorage.getItem("user")).firstName}!
          </span>
        )}
      </h1>
      <p className="text-[10px] whitespace-normal">
        We’re excited to have you here. Start with our{" "}
        <span className="text-[#3767B1]">Clikkle HR 101 guide</span> or{" "}
        <span className="text-[#3767B1]">training course</span> to dive right
        in.
      </p>
      <p className="mt-2 text-[12px]">
        And remember, you can{" "}
        <span className="text-[#3767B1]">customize this space</span> anytime in
        Administration. Welcome aboard!
      </p>
    </div>
  </div>
 
</div>


      {isMobile && <hr className="w-full border-t border-gray-300 opacity-65 my-2 collapsible-div " />}

      <div className={`flex items-end w-full gap-1 text-gray-500 text-[10px] mt-1 collapsible-div ${isMobile ? 'justify-end mr-10 mb-2' : 'justify-end mr-2 mt-[-15px] mb-2 '}`}>
        <img src={reload} alt="Reload Icon" className="h-3 w-3 md:h-4 md:w-4 "  />
        <p>just now</p>
      </div>
   
    </Box>
  );
};

export default Interduction;