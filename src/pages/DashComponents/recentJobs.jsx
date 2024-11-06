import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
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
      className="rounded-lg mb-4 shadow-md  pt-4 pr-4 pb-4"
      sx={{height:"100%",
        backgroundColor: "background.view",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-center">
        <div className=" md:w-1/2 flex justify-left">

        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Typography sx={{marginRight:"270px"}} className="w-full md:w-1/3 border-l-4 border-blue-500 pl-2 whitespace-nowrap text-xl">
            Recent Job Application
          </Typography>
            

          <div style={{ display: 'flex', gap: '10px', color: 'white',marginTop:"9px" }}>
      <OpenInFullIcon sx={{height:"14px"}} />
      <CropFreeIcon sx={{height:"16px"}} />
      <RefreshIcon sx={{height:"20px"}} />
      <LinkIcon sx={{height:"20px"}} />
    </div>
    </Box>


        </div>
      </div>
      <div className="w-full overflow-x-auto md:overflow-x-hidden">
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex flex-row mb-1 min-w-[30rem]">
              <div className="w-[45%] flex flex-row">
                <div
                  className="flex items-center justify-center"
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  <AccountCircleIcon fontSize="large" />
                </div>
                <div className="flex-1 truncate">
                  <h1 
                    className="text-sm truncate "
                    style={{ fontSize: "15px", marginBottom: "-10px" }}
                  >
                    {item.fullName}
                  </h1>
                  <p className="truncate text-sm text-zinc-500" style={{ fontSize: "12px",marginTop:"8px",width:"140px" }}>
                    {item.email}
                  </p>
                </div>
              </div>
              <div className="w-[5%] flex items-center justify-start">
                <p style={{fontFamily:"sans-serif",fontSize:"13px",marginLeft:"-38px"}} className="">{item.experience}</p>
              </div>
              <div className="w-[30%] flex items-center justify-start">
                <p
                  className=""
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.jobTitle}
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

const App = () => {
  return <RecentJobs items={dummyItems} />;
};

export default App;
