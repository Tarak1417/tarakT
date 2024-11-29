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
import { Box, useMediaQuery, useTheme } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useRefresh } from "../components/Header";

import Interduction from "./Interduction";
import PlusIcon from "../assets/CloclIcons/Add Button (1).png";
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
          className="text-white  bg-sky-500 p-1 rounded-lg"
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
          className="text-white bg-rose-500 p-1 rounded-lg items-center"
        />
      ),
      title: "Department",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#FF0000", fontSize: "1.2em" }}
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
          className="text-white bg-blue-300 p-1 rounded-lg"
        />
      ),
      title: "Expenses",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#FF0000", fontSize: "1.2em" }}
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

  return (
    <Box sx={{ backgroundColor: "background.main", width: "93vw", mx: "auto" }}>
      <div className="flex flex-col gap-5 py-2 px-4">
        <div>
          {switchScreen.first === "mySpace" ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                My Space
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Organization
              </Button>
            </>
          ) : (
            <></>
          )}

          {switchScreen.first === "team" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                My Space
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Organization
              </Button>
            </>
          ) : (
            <></>
          )}

          {switchScreen.first === "organization" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                My Space
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Organization
              </Button>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {/* My Space Options */}
          {switchScreen.first === "mySpace" &&
          switchScreen.second === "overview" ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "dashboard" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Dashboard
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "mySpace",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}

          {switchScreen.first === "mySpace" &&
          switchScreen.second === "dashboard" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "dashboard" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Dashboard
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "mySpace",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}

          {switchScreen.first === "mySpace" &&
          switchScreen.second === "calendar" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "overview" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>

              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "mySpace", second: "dashboard" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Dashboard
              </Button>

              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "mySpace",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}

          {/* Team Options */}

          {switchScreen.first === "team" &&
          switchScreen.second === "teamSpace" ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team Space
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "reportees" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Reportees
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "department" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamList" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team List
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "hrProcess" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                HR Process
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "team" &&
          switchScreen.second === "reportees" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team Space
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "reportees" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Reportees
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "department" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamList" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team List
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "hrProcess" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                HR Process
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "team" &&
          switchScreen.second === "department" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team Space
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "reportees" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Reportees
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "department" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamList" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team List
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "hrProcess" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                HR Process
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "team" &&
          switchScreen.second === "teamList" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team Space
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "reportees" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Reportees
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "department" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamList" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team List
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "hrProcess" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                HR Process
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "team" &&
          switchScreen.second === "hrProcess" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamSpace" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team Space
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "reportees" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Reportees
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "department" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "teamList" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Team List
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({ first: "team", second: "hrProcess" });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                HR Process
              </Button>
            </>
          ) : (
            <></>
          )}

          {/* Organization Options */}

          {switchScreen.first === "organization" &&
          switchScreen.second === "overview" ? (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "announcements" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "policies" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "employeeTree" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "departmentTree" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "departmentDirectory" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "birthdayFolks" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "newHires" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "organization" &&
          switchScreen.second === "calendar" ? (
            <>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "overview",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Overview
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "announcements",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Announcements
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "policies",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Policies
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "employeeTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Employee Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentTree",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Tree
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "departmentDirectory",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Department Directory
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "birthdayFolks",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Birthday Folks
              </Button>
              <Button
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "newHires",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                New Hires
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  handleSwitchScreen({
                    first: "organization",
                    second: "calendar",
                  });
                }}
                color="primary"
                sx={{ ml: "1rem" }}
              >
                Calendar
              </Button>
            </>
          ) : (
            <></>
          )}

          {/* Overview
Announcements
Policies
Employee Tree
Department Tree
Department Directory
Birthday Folks
New Hires
Calendar */}
        </div>
      </div>

      {/* <Interduction /> */}

      <div className="w-full flex flex-col gap-2 py-2 px-8 md:flex-row">
        {switchScreen.first === "mySpace" &&
        switchScreen.second === "overview" ? (
          <>
            <div className="flex flex-col gap-2 justify-center items-center">
              <div className="min-h-32 w-60 flex py-2 flex-col justify-center items-center border border-gray-800">
                <div>
                  <AccountBoxIcon sx={{ fontSize: "10rem" }} />
                </div>
                <div className="flex gap-2 flex-col justify-center items-center">
                  <h1>Steward Graham</h1>
                  <h1>CEO</h1>
                  <span>00 : 00 : 00</span>
                  <Button variant="outlined">Check In</Button>
                </div>
              </div>
              <div className="min-h-32 w-60 flex gap-4 py-2 px-2 flex-col justify-start items-start border border-gray-800">
                <div>Reportees</div>
                <div className="flex gap-2 flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <div>
                      <AccountBoxIcon sx={{ fontSize: "3rem" }} />
                    </div>
                    <div>
                      <h1>Steward Graham</h1>
                      <h1>CEO</h1>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-col justify-center items-center">
                  <div className="flex flex-row">
                    <div>
                      <AccountBoxIcon sx={{ fontSize: "3rem" }} />
                    </div>
                    <div>
                      <h1>Steward Graham</h1>
                      <h1>CEO</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <Button variant="text">+1 More</Button>
                </div>
              </div>
            </div>
            <div className="min-h-32 w-full flex gap-4 py-2 px-2 flex-col justify-start items-start border border-gray-800">
              <div>
                <Button sx={{ ml: "1rem" }}>Activities</Button>
                <Button sx={{ ml: "1rem" }}>Feeds</Button>
                <Button sx={{ ml: "1rem" }}>Profile</Button>
                <Button sx={{ ml: "1rem" }}>Approvals</Button>
                <Button sx={{ ml: "1rem" }}>Leave</Button>
                <Button sx={{ ml: "1rem" }}>Attendance</Button>
                <Button sx={{ ml: "1rem" }}>Time Logs</Button>
                <Button sx={{ ml: "1rem" }}>Timesheets</Button>
                <Button sx={{ ml: "1rem" }}>Jobs</Button>
                <Button sx={{ ml: "1rem" }}>Files</Button>
                <Button sx={{ ml: "1rem" }}>HR Process</Button>
                <Button sx={{ ml: "1rem" }}>Career History</Button>
                <Button sx={{ ml: "1rem" }}>Cases</Button>
                <Button sx={{ ml: "1rem" }}>Goals</Button>
                <Button sx={{ ml: "1rem" }}>FeedBack</Button>
                <Button sx={{ ml: "1rem" }}>Realted Data</Button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* <div className="flex flex-col sm:px-4 p-4 pt-[20px] mt-10px">
        <div className="">
          <Typography variant="h5" className="text-gray-500" gutterBottom>
            HR DASHBOARD3
          </Typography>

          <div className="flex flex-col md:flex-row gap-1.5">
            <div className="w-full md:w-3/4 flex flex-col ">
              <div
                className={`flex flex-col md:flex-row gap-1.5 mb-3.5   justify-items-stretch ${
                  isMobile ? "mt-[-27px]" : ""
                }`}
              >
                {boxesData &&
                  boxesData.map((box, index) => (
                    <Grid
                      sx={{ backgroundColor: "background.view" }}
                      key={index}
                      className="rounded-lg shadow-md md:w-1/3"
                      style={{
                        width: "100%",
                        padding: "4px",
                        marginTop: isMobile ? "" : "-27px",
                        marginBottom: isMobile ? "" : "1px", // Correct syntax for conditional marginTop
                        height: "50px",
                      }}
                    >
                      <div
                        className="flex items-center"
                        style={{ fontSize: "12px", marginTop: "-2px" }}
                      >
                        <p>{box.title}</p>
                        {box.plusicon}{" "}
                        Conditionally display PlusIcon if it exists
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        <p
                          style={{ fontSize: "13px" }}
                          className="w-5/6 text-xl"
                        >
                          {box.value}
                        </p>
                        <div style={{}} className="w-1/6 ">
                          {box.icon}
                        </div>
                      </div>
                    </Grid>
                  ))}
              </div>
              <Calander />
            </div>
            <div
              className={`w-full md:w-1/4  ${isMobile ? "" : "mt-[-27px]  "}`}
            >
              <NoticeBoard eventData={overview && overview?.notices} />
              <Applicationleave
                eventData={overview && overview?.leave}
                fetchOverview={() => fetchOverview()}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row mt-1 ${
            isMobile ? "mt-[15px]" : ""
          }`}
        >
          <div
            className={`md:w-[30%] md:wh-[30%] ${
              isMobile ? "" : "mr-1"
            } md:mb-0 flex-grow flex flex-col`}
            style={{ height: "auto" }}
          >
            <Recentjobapplication eventData={overview?.applications || []} />
          </div>
          <div
            className="md:w-[30%] md:wh-[30%]  md:mb-0 flex-grow flex flex-col"
            style={{ height: "auto" }}
          >
            <Recentactivity />
          </div>
        </div>
        <div className=" flex flex-col md:flex-row   w-full">
          <div className=" md:w-2/2   md:mb-0 flex-grow">
            <Attendance
              attendanceData={overview && overview?.attendance}
              isDashboardCall
            />
          </div>
        </div>
      </div> */}
    </Box>
  );
};

export default Dashboard;
