import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { TrendingUp, TrendingDown, Height } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NoticeBoard from "./DashComponents/noticeboard";
import UpcomingEvents from "./DashComponents/upcomingevents";
import Bars from "./DashComponents/bars";
import Calander from "./Schedule/EmployeeShift";
import Applicationleave from "../pages/DashComponents/Applicationleave";
import Recentjobapplication from "../pages/DashComponents/recentJobs";
import Recentactivity from "../pages/DashComponents/RecentActivities";

import RecentActivity from "./DashComponents/recent";
import GenderChart from "./DashComponents/GenderChart";
import RecentJobs from "./DashComponents/recentJobs";
import Attendance from "./DashComponents/attend";
import {
  Box,
  useMediaQuery,
  useTheme,
  Tab,
  Tabs,
  Divider,
  Avatar,
} from "@mui/material";
import MySpaceOverview from "./Dashboard/MySpace/MySpaceOverview";
import MySpaceCalendar from "./Dashboard/MySpace/MySpaceCalendar";
import MySpaceDashboard from "./Dashboard/MySpace/MySpaceDashboard";
import TeamSpace from "./Dashboard/Team/TeamSpace";
import Reportees from "./Dashboard/Team/Reportees";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useRefresh } from "../components/Header";

import Interduction from "./Interduction";
import PlusIcon from "../assets/CloclIcons/Add Button (1).png";
import Department from "./Dashboard/Team/Department";
import TeamList from "./Dashboard/Team/TeamList";
import HRProcess from "./Dashboard/Team/HRProcess";
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
    console.log("page refresh", refreshPage);
  }, [fetchOverview, refreshPage]);
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
          className="text-white  bg-[#878ECE] p-1 rounded-lg"
        />
      ),
      title: "Total Employees",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#00FF00", fontSize: "1.2em" }}
        >
          {overview?.employees?.total || 0}
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingUp className="text-green-300" />,
      plusicon: (
        <img src={PlusIcon} alt="addicon" className="h-4 w-4 ml-[10px]" />
      ),
    },
    {
      icon: (
        <ApartmentIcon
          fontSize="medium"
          className="text-white bg-[#E05353] p-1 rounded-lg items-center"
        />
      ),
      title: "Department",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#407BFF", fontSize: "1.2em" }}
        >
          {overview?.departments || 0}
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-300" />,
      plusicon: (
        <img src={PlusIcon} alt="addicon" className="h-4 w-4 ml-[10px]" />
      ),
    },
    {
      icon: (
        <AttachMoneyIcon
          fontSize="medium"
          className="text-white bg-[#3E80E5] p-1 rounded-lg"
        />
      ),
      title: "Expenses",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#E05353", fontSize: "1.2em" }}
        >
          ${" "}
          {overview && overview?.expenses
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [switchScreen, setSwitchScreen] = useState({
    first: "mySpace",
    second: "overview",
  });

  const handleSwitchScreen = (screen) => {
    setSwitchScreen(screen);
  };

  const tabs = [
    { label: "My Space", value: "mySpace", second: "overview" },
    { label: "Team", value: "team", second: "teamSpace" },
    { label: "Organization", value: "organization", second: "overview" },
  ];

  // Define button mappings based on `first` and `second` values
  const buttonMappings = {
    mySpace: [
      { label: "Overview", second: "overview" },
      { label: "Dashboard", second: "dashboard" },
      { label: "Calendar", second: "calendar" },
    ],
    team: [
      { label: "Team Space", second: "teamSpace" },
      { label: "Reportees", second: "reportees" },
      { label: "Department", second: "department" },
      { label: "Team List", second: "teamList" },
      { label: "HR Process", second: "hrProcess" },
    ],
    organization: [
      { label: "Overview", first: "organization", second: "overview" },
      {
        label: "Announcements",
        first: "organization",
        second: "announcements",
      },
      { label: "Policies", first: "organization", second: "policies" },
      { label: "Employee Tree", first: "organization", second: "employeeTree" },
      {
        label: "Department Tree",
        first: "organization",
        second: "departmentTree",
      },
      {
        label: "Department Directory",
        first: "organization",
        second: "departmentDirectory",
      },
      {
        label: "Birthday Folks",
        first: "organization",
        second: "birthdayFolks",
      },
      { label: "New Hires", first: "organization", second: "newHires" },
      { label: "Calendar", first: "organization", second: "calendar" },
    ],
  };

  // Dynamically render buttons
  const renderButtons = () => {
    const currentButtons = buttonMappings[switchScreen.first] || [];
    return currentButtons.map((btn) => (
      <Button
        key={btn.second}
        variant={switchScreen.second === btn.second ? "contained" : "text"}
        onClick={() =>
          handleSwitchScreen({ first: switchScreen.first, second: btn.second })
        }
        color="primary"
        // sx={{ ml: "1rem" }}
      >
        {btn.label}
      </Button>
    ));
  };

  return (
    <Box
      sx={{ backgroundColor: "background.default", width: "93vw", mx: "auto" }}
    >
      <div className="flex flex-col gap-3 px-7">
        <Box>
          <Tabs
            value={tabs.findIndex((tab) => tab.value === switchScreen.first)}
            onChange={(event, newValue) => {
              const selectedTab = tabs[newValue];
              handleSwitchScreen({
                first: selectedTab.value,
                second: selectedTab.second,
              });
            }}
            textColor="primary"
            indicatorColor="primary"
            aria-label="Navigation Tabs"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>
        <div className="flex flex-row gap-3 p-2 rounded-lg">
          {renderButtons()}
        </div>
      </div>
      <div className="w-full flex flex-col gap-1 py-3 px-7 md:flex-row">
        {switchScreen.first === "mySpace" &&
        switchScreen.second === "overview" ? (
          <>
            <MySpaceOverview />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "mySpace" &&
        switchScreen.second === "dashboard" ? (
          <>
            <MySpaceDashboard />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "mySpace" &&
        switchScreen.second === "calendar" ? (
          <>
            <MySpaceCalendar />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "team" &&
        switchScreen.second === "teamSpace" ? (
          <>
            <TeamSpace />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "team" &&
        switchScreen.second === "reportees" ? (
          <>
            <Reportees />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "team" &&
        switchScreen.second === "department" ? (
          <>
            <Department />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "team" && switchScreen.second === "teamList" ? (
          <>
            <TeamList />
          </>
        ) : (
          <></>
        )}
        {switchScreen.first === "team" &&
        switchScreen.second === "hrProcess" ? (
          <>
            <HRProcess />
          </>
        ) : (
          <></>
        )}
      </div>
    </Box>
  );
};

export default Dashboard;
