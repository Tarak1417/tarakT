import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Stack } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import DeleteIcon from "@mui/icons-material/Delete";
import NoRecentJobApplication from "./NoRecentJobApplication";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RefreshIcon from '@mui/icons-material/Refresh';
import LinkIcon from '@mui/icons-material/Link';
import countries from 'i18n-iso-countries';
import CountryFlag from 'react-country-flag';
import useExpandCollapse from "../../hooks/useExpandCollapse";
import hrimages1 from "../../assets/Interductionimages/Vector-1.png"
import hrimages2 from "../../assets/Interductionimages/Vector-2.png"
import hrimages3 from "../../assets/Interductionimages/Vector-3.png"
import hrimages4 from "../../assets/Interductionimages/Vector.png"
import { Link } from 'react-router-dom';

// Initialize the country names (optional: specify language)
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function CountryDisplay({ countryCode }) {
  const countryName = countries.getName(countryCode, "en");


  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CountryFlag
        countryCode={countryCode}
        svg
        style={{ width: '20px', marginRight: '5px' }}
        title={countryName}
      />
      <span>{countryName || "Unknown Country"}</span>
    </div>
  );
}


const RecentJobs = ({ items }) => {
  useExpandCollapse();
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box

      p={2}
      boxShadow={3}
      borderRadius="12px"
      bgcolor="background.default"
      //minHeight="87vh"
      width="100%"
      overflow="auto"
      mt={isMobile ? "-10px" : ""}

    >
      {/* Header Section */}
      <Stack direction="row" alignItems="center" justifyContent="space-between"  className="collapsible-main" >
        <Typography variant="h6" sx={{ fontSize: isMobile ? "14px" : "17px", mr: "10px", fontWeight: "bold", whiteSpace: "nowrap" }}>
          Recent Job Application
        </Typography>

        <div style={{ display: "flex", gap: '20px', }}>
          <div style={{ display: 'flex', gap: '10px', color: 'white', marginTop: "9px" }}>
          
            <img src={hrimages4} alt="" className="h-3 w-3 collapse-div" />
            {isMobile ? "" : <img src={hrimages1} alt="" className="h-3 w-3 collapse-div" />}

            <img src={hrimages2} alt="" className="h-3 w-3" />
            <img src={hrimages3} alt="" className="h-3 w-3" />
          </div>
          <Link to="/receivedapplications">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3767B1",
                fontSize: "10px",
                color: "white",
                textTransform: "none",
                height: "25px",
                width: "80px",
                display: isMobile ? "none" : "inline-flex", // Hide on mobile
              }}
            >
              View All
            </Button>
          </Link>
        </div>
      </Stack>
      <div className="w-full overflow-x-auto md:overflow-x-hidden collapsible-div mt-4" style={{ minHeight:"74.9vh"}}>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex flex-row mb-1 min-w-[30rem]">
              <div className="w-[45%] flex flex-row">
                <div
                  className="flex items-center justify-center"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  {/* <AccountCircleIcon fontSize="large" /> */}
                  <Avatar src={`https://ui-avatars.com/api/?name=${item.fullName}`} alt={item.fullName} sx={{ width: 30, height: 30, borderRadius: '25px', marginTop: '-14px' }} />
                </div>
                <div className="flex-1 truncate">
                  <h1
                    className="text-sm truncate "
                    style={{ fontSize: "15px", marginBottom: "-10px" }}
                  >
                    {item.fullName}
                  </h1>
                  <p className="truncate text-sm text-zinc-500" style={{ fontSize: "12px", marginTop: "8px", width: "140px" }}>
                    {item.jobTitle}
                  </p>
                </div>
              </div>
              <div className="w-[5%] flex items-center justify-start">
                <p style={{ fontFamily: "sans-serif", fontSize: "13px", marginLeft: "-38px" }} className="">{item.experience} years</p>
              </div>
              <div className="w-[30%] flex items-center justify-start">
                <p
                  className=""
                  style={{ fontSize: "14px" }}
                >
                  <CountryDisplay countryCode={item.countryCode} />
                </p>
              </div>
              <div className="w-[20%] gap-2 flex items-center justify-end whitespace-nowrap">
                <Box
                  sx={{
                    backgroundColor: '#0F1E0E', // Dark greenish background
                    width: 65,
                    height: 45,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CallIcon style={{ color: '#42B824', fontSize: 20 }} />
                </Box>

                {/* Email Icon */}
                <Box
                  sx={{
                    backgroundColor: '#0C0F18', // Dark blueish background
                    width: 65,
                    height: 45,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EmailIcon style={{ color: '#2670E1', fontSize: 20 }} />
                </Box>

                {/* Delete Icon */}
                <Box
                  sx={{
                    backgroundColor: '#1C0B0B', // Dark reddish background
                    width: 65,
                    height: 45,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <DeleteIcon style={{ color: '#F13B3B', fontSize: 20 }} />
                </Box>
              </div>
            </div>
          ))
        ) : (
          <NoRecentJobApplication />
        )}
      </div>
      {isMobile && <Link to="/receivedapplications"><div className=" mt-4">
        <button
          style={{ color: "blue" }}
          className={`px-4 py-2 rounded-md text-sm font-medium`}
        >
          View All
        </button>
      </div>
      </Link>
      }
    </Box>
  );
};

// Dummy data for testing
const dummyItems = [
  {
    fullName: "John Doe",
    email: "johndoe@example.com",
    experience: "5 years",
    jobTitle: "south Africa",
  },
  {
    fullName: "Jane Smith",
    email: "janesmith@example.com",
    experience: "3 years",
    jobTitle: "Usa",
  },
  {
    fullName: "Michael Brown",
    email: "michaelbrown@example.com",
    experience: "2 years",
    jobTitle: "United kingdom",
  },
];

const App = (props) => {
  return <RecentJobs items={props.eventData} />;
};

export default App;
