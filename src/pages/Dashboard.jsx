import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { TrendingUp, TrendingDown, Height } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NoticeBoard from "./DashComponents/noticeboard";
import UpcomingEvents from "./DashComponents/upcomingevents";
import Bars from "./DashComponents/bars";
import Calander from './Schedule/EmployeeShift';
import Applicationleave from '../pages/DashComponents/Applicationleave';
import Recentjobapplication from "../pages/DashComponents/recentJobs";
import Recentactivity from "../pages/DashComponents/RecentActivities";

import RecentActivity from "./DashComponents/recent";
import GenderChart from "./DashComponents/GenderChart";
import RecentJobs from "./DashComponents/recentJobs";
import Attendance from "./DashComponents/attend";
import { Box,useMediaQuery, useTheme } from "@mui/material";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { useRefresh } from "../components/Header";

import Interduction from "./Interduction";

const Dashboard = () => {

  const navigate = useNavigate(); // Get the navigate function

  const [overview, setOverview] = useState({});
  const { refreshPage } = useRefresh();



 
  const fetchOverview = useCallback(async () => {
    try {
      const response = await axios.get(`/hr/dashboard`);
      setOverview(response.data.overview);
    } catch (e) {
      console.log(e);
    }
  }, [setOverview]);

  useEffect(() => {
    fetchOverview();
    console.log("page refresh" , refreshPage);
  }, [fetchOverview , refreshPage]);
  // console.log(overview);


  const data = [
    { name: "Jan", employees: 100, budget: 200, year: 2024 },
    { name: "Feb", employees: 150, budget: 220, year: 2024 },
    { name: "Mar", employees: 200, budget: 250, year: 2024 },
    { name: "Apr", employees: 180, budget: 230, year: 2024 },
    { name: "May", employees: 210, budget: 240, year: 2024 },
    { name: "Jun", employees: 220, budget: 260, year: 2024 },
    { name: "Jan", employees: 100, budget: 200, year: 2024 },
    { name: "Feb", employees: 150, budget: 220, year: 2024 },
    { name: "Mar", employees: 200, budget: 250, year: 2024 },
    { name: "Apr", employees: 180, budget: 230, year: 2024 },
    { name: "May", employees: 210, budget: 240, year: 2024 },
    { name: "Jun", employees: 220, budget: 260, year: 2024 },
  ];
  const barsData = [
    { name: "Thu", inProgress: 50, pending: 20, completed: 30 },
    { name: "Sun", inProgress: 30, pending: 20, completed: 20 },
    { name: "Tue", inProgress: 20, pending: 50, completed: 5 },
    { name: "Fri", inProgress: 30, pending: 20, completed: 41 },
    { name: "Sat", inProgress: 20, pending: 0, completed: 40 },
    { name: "Mon", inProgress: 30, pending: 20, completed: 50 },
    { name: "Wed", inProgress: 50, pending: 10, completed: 40 },
  ];

  const boxesData = [
    {
      icon: (
        <GroupIcon
          fontSize="medium"
          className="text-white  bg-sky-500 p-1 rounded-lg"
        />
      ),
      title: "Total Employees",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#00FF00", fontSize: "1.5em" }}
        >
          {overview?.employees?.total || 0}
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingUp className="text-green-300" />,
    },
    {
      icon: (
        <ApartmentIcon
          fontSize="medium"
          className="text-white bg-rose-500 p-1 rounded-lg items-center"
        />
      ),
      title: "Department",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#FF0000", fontSize: "1.2em" }}
        >
          {overview?.departments  || 0}
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-300" />,
    },
    {
      icon: (
        <AttachMoneyIcon
          fontSize="medium"
          className="text-white bg-blue-300 p-1  rounded-lg"
        />
      ),
      title: "Expenses",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#FF0000", fontSize: "1.2em" }}
        >
          ${" "}
          { overview && overview?.expenses
            ? overview.expenses.reduce((total, el) => total + el.price, 0)
            : 0}
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingDown className="text-red-300" />,
    },
  ];
  // const eventData = [
  //     { date: '5 Mar', title: 'Board Meeting', description: 'Attend board meeting with company manager.', backgroundColor: '#fbbf24' },
  //     { date: '9 Mar', title: 'Design Team Meeting', description: 'Attend design team meeting with team mates and HOD.', backgroundColor: '#dc2626' },
  //     { date: '7 Feb', title: 'Tech Conference', description: 'Attend conference with teammates and other departments.', backgroundColor: '#f97316' },
  //     { date: '4 Mar', title: 'Development Team Pitch', description: 'Pitch idea on new development to the company board,', backgroundColor: '#3b82f6' },
  // ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
 
    <Box sx={{ backgroundColor: "background.main",
      width:"91vw", }} >
       <Box >
          <Interduction/>
          </Box>
      <div className="flex flex-col sm:px-4 px-2 py-6">
        <div className="">
          {/* <Typography variant="h5" className="text-gray-500" gutterBottom>
            HR DASHBOARD
          </Typography> */}
                  
        

         
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-3/4 flex flex-col ">
              <div className={`flex flex-col md:flex-row gap-4 mb-4 ${isMobile?"mt-[-20px]":""}`}>
                {boxesData && boxesData.map((box, index) => (
                  <Grid
                    sx={{ backgroundColor: "background.view" }}
                    key={index}
                    className="rounded-lg p-4 shadow-md md:w-1/3"
                    style={{
                      
                      width: '100%',
                      padding: '8px',
                      marginTop: isMobile ? "" : '-27px',  // Correct syntax for conditional marginTop
                      height: '50px'
                    }}
                  >
                    
                    <p style={{fontSize:'12px',marginTop:'-8px'}}>{box.title}</p>
                    <div className="flex items-center justify-center mb-2">
                      <p style={{fontSize:'13px'}} className="w-5/6 text-xl">{box.value}</p>
                      <div style={{}} className="w-1/6 ">{box.icon}</div>
                    </div>
                  
                  </Grid>
                ))}
              </div>
            <Calander  />
            </div>
            <div className={`w-full md:w-1/4 mt-[-25px]  ${isMobile?"mt-[1px]":" "}`}>
              <NoticeBoard eventData={ overview && overview?.notices} />
              <Applicationleave  />
            </div>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row mt-1 ${isMobile?"":"mb-[100px] mt-[10px]"}`} >
          <div className=" md:w-[30%] mx-1 mb-2 md:mb-0 flex-grow">
           <Recentjobapplication/>
          </div>
          <div className=" md:w-[30%] mx-1 mb-2 md:mb-0 flex-grow">
            <Recentactivity/>
          </div>
          
       
        </div>
        <div className=" justify-items-stretch flex flex-col md:flex-row py-2 items-stretch">
         
          <div className=" md:w-1/2 mx-1 mb-2 md:mb-0 flex-grow">
            <Attendance items={ overview && overview?.attendance} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
