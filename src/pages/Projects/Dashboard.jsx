import React, { useCallback, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Charts from "../DashComponents/charts";
import NoticeBoard from "../DashComponents/noticeboard";
import UpcomingEvents from "../DashComponents/upcomingevents";
import Bars from "../DashComponents/bars";
import RecentActivity from "../DashComponents/recent";
import GenderChart from "../DashComponents/GenderChart";
import RecentJobs from "../DashComponents/recentJobs";
import Attendance from "../DashComponents/attend";
import { Box } from "@mui/material";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pending from "@mui/icons-material/Pending";
import TimerImage from '../../assets/Icons/f7_timer.png'
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ProjectMilesTone from "./ProjectMilstone";
import ProjectActivity from "./ProjectActivity";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import {
    DashboardOutlined,
    Settings,
} from '@mui/icons-material';
import ProjectChart from "../DashComponents/ProjectChart";
function Dashboard() {
  const [overview, setOverview] = useState({});
  const fetchOverview = useCallback(async () => {
    try {
      const response = await axios.get(`/hr/projects`);
      console.log(response)
      setOverview(response.data.projects);
    } catch (e) {
      console.log(e);
    }
  }, [setOverview]);

  useEffect(() => {
    fetchOverview();
  }, [fetchOverview]);
  console.log(overview);

  const countProjectsByStatus = (status) => {
    return overview.filter((project) => project.status === status).length;
  };

  const totalProjects = overview.length;
  const completedProjects = countProjectsByStatus('Completed');
  const ongoingProjects = countProjectsByStatus('Ongoing');
  const pendingProjects = countProjectsByStatus('Pending');

  console.log("totalProjects0" ,totalProjects , completedProjects , ongoingProjects , pendingProjects )


  const barsData = [
    { name: "Thu", inProgress: 50, pending: 20, completed: 30 },
    { name: "Sun", inProgress: 30, pending: 20, completed: 20 },
    { name: "Tue", inProgress: 20, pending: 50, completed: 5 },
    { name: "Fri", inProgress: 30, pending: 20, completed: 41 },
    { name: "Sat", inProgress: 20, pending: 0, completed: 40 },
    { name: "Mon", inProgress: 30, pending: 20, completed: 50 },
    { name: "Wed", inProgress: 50, pending: 10, completed: 40 },
  ];

  const btn = [
    {btn:"Low"},
    {btn:"Medium"},
    {btn:"Medium"},
    {btn:"High"}
  ]
  const boxesData = [
    {
      icon: (
        <DashboardOutlined
          fontSize="large"
          className="text-white  bg-sky-400 p-2 rounded-lg"
          style={{padding:'3px' , width:'41px', height:'39px'}}
        />
      ),
      title: "Total Projects",
      value: (
        <Typography
          variant="body1"
          style={{ color: "blue", fontSize: "1.2em" }}
        >
          {totalProjects ? totalProjects : "150"}
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingUp className="text-green-500" />,
    },
    {
      icon: (
        <NoteAltIcon
          fontSize="large"
          className="text-white  bg-green-400 p-2 rounded-lg"
          style={{padding:'3px' , width:'41px', height:'39px'}}
        />
      ),
      title: "Completed Projects",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#00FF00", fontSize: "1.2em" }}
        >
          {completedProjects ? completedProjects : "0"}
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-500" />,
    },
    {
    //   icon: (
    //     // <ApartmentIcon
    //     //   fontSize="large"
    //     //   className="text-white bg-rose-500 p-2 rounded-lg"
    //     // />
    //   ),
      title: "Ongoing Projects",
      value: (
        <Typography
          variant="body1"
          style={{ color: "rgb(85 255 213", fontSize: "1.2em" }}
        >
          {ongoingProjects ? ongoingProjects : "0"}
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-500" />,
    },

    {
      icon: (
        <img
        src={TimerImage}
        alt="GroupIcon"
        className="text-white  p-2 rounded-lg"
        style={{ fontSize: "large" , color:'white' ,backgroundColor:'rgb(234 122 105)' }}
      />
      ),
      title: "Pending Projects",
      value: (
        <Typography
          variant="body1"
          style={{ color: "#FF0000", fontSize: "1.2em" }}
        >
          {pendingProjects ? pendingProjects : "0"}
        </Typography>
      ),
      description: "124 for last month",
     
    },
  ];
  const boxesData1 = [
    {
      icon: (
        <img
        src="https://static-00.iconduck.com/assets.00/figma-icon-256x256-73jx2t0q.png"
        alt="GroupIcon"
        className="text-white  p-2 rounded-lg"
        style={{ fontSize: "large" , padding:'0px' , height:'39px' , width:'40px' }}
      />
      ),
      title: "Figma",
      value: (
        <Typography variant="body1" style={{}}>
          Designing Departments
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingUp className="text-green-500" />,
    },
    {
      icon: (
        <img
        src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png"
        alt="GroupIcon"
        className="text-white  p-2 rounded-lg"
        style={{ fontSize: "large" , padding:'0px' , height:'39px' , width:'40px' }}
      />
      ),
      title: "HTML",
      value: (
        <Typography variant="body1" style={{ fontSize: "1em" }}>
          Frontend Departments
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-500" />,
    },
    {
      icon: (
        <img
        src="data:image/png;base64,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
"
        alt="GroupIcon"
        className="text-white  p-2 rounded-lg"
        style={{ fontSize: "large" , padding:'0px' , height:'39px' , width:'40px' }}
      />
      ),
      title: "Abode XD",
      value: (
        <Typography variant="body1" style={{ fontSize: "1em" }}>
          Designing Departments
        </Typography>
      ),
      description: "124 for last month,",
      trendIcon: <TrendingDown className="text-red-500" />,
    },
    {
      icon: (
        <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD6CAMAAADXwSg3AAAAwFBMVEX///9HxfsAVp4Atfgzwfvp9/4PW6FFxfsAs/g9w/sAtvn7/v8ARpcARJY6wvsAr/cAQpZey/vT7/7e8/5tz/wAUpdUyPsnvPkASogAV6DE6v1izPva8v7i9f46vvkATY4ARH2s4v1/1Py45v3L7P4Faa55mcEAP3SFosYANmTK1ua96P2X2fsAPG8AMFmLp8mM2Pxzos0FYKEEWZMEUYYESXgAR4IEQWsAKVEDOFwAIkQAKkwAPoHAz+LS3OqastCAMTjGAAAD20lEQVR4nO3bi1YaMRAG4C1o0aDQWhSstaC2pdRK7c1qb77/W3V3uRQky06S4cxk/ecBsuc7/4QkmyVJBOu68YStWmeSkvMWn2QLEkgggQQSSCCBBBJIIIEEEkgg2Wh1KiNhzeRCUsKaCSQ8kl1IIIEEEkgggQQSSCARk1xCAgkkkEACCSSQQAKJk+QlJJBAoltyAgkkkEACCSSQQPJ4JG8gUSZpQALJcj2HBBJIIIEEEkggeTySA0gggQQSSCCBBBJIIIEEEkiqJDmqiqSJTKySV4KQJiSQQAIJJJBAAgmPZJuzTiUlnS3G6s4vnyQkjF+ULWy/IbEPWx3JC0j8HwlJybCQBDzyYBPjCksYU5GW8FnkJVwWDRIeS6OlQcJh0ZEJh6WxdWobVkASamm0BCSFm9YQiy5JiEWbxN+iT+JrIUo4/09FONz5WHRKfCxaJe4WvRJXi2aJm0W3xMWiXUK3aFxP/CxECeObA5/rAYqFKHnd7kpKKBaqZKde57J4XtmUWlrbVAmXhXi4c7bQM+GyeEtKLC6Z8FgCJGstrpJwS5AkKf4ddZeEWkIlRd8c+kjCLOESu2XXSxJi4ZDYLL4SfwuPZNXiL/G1cEkeWkIkfhY+ybIlTOJj4ZQsWkIl7hbiS3VnS7jE1cItmVk4JG4W4vbb2cIjcbFsQpJZuCR0C/Giw7lOSJIuQUK1bCYTalEyoVrikFAsshJad9Es8UjKLDFJ1lvikqyzxCYptsQnKbLEKLFbRCVNX4nNEqvEYolWsmKJWPLAQnvFplSyZIlcsmCJXjK3VEAytdCOqcoluUVUYtgkqaUhKEmSozabxOx8lpQkyQmXxZi3++8qYUkltdqesKXDYckllbBMJRWwzCXRWxYkkVuWJPKWc3/LA0nEFmO+HNYqYbFIIrVkklVKjJZU0rdIIrTkEislNosxX3tFFHHLtYsll9j7KzJLKrnpF4aSWd5HYskkvbWUWHJJJYNe8UzRYflIsRjzbVAWShyWXEKg6LekkmEaSll/5RbhuV9iySWU/lJvSSVXk1CKF5U4LMZ8v6KHotmSS5wo4pYzuyWVjDIKub/UWnKJW38ptWSSkWt/qbQY82OchUJdVPRacsmsvxwpuiymPpUMp5sWF4m85aK9KLmdUQY9R4cqy1SS91f/8PjYnaLFYup3t+OMMuwd+jD0WCaS8egmzcNbIm+5bGeSn7/GgzCHEsvdLYNDheV3n4OhwvLnGRMkrf1PsMACCyywwDKpDxWyIBdYYIEFlv+1B4tKy/49LCotVeoxWGDZtKVKcx8WtvoLi05L7Slb7d3/A3AY/1ddUbKTAAAAAElFTkSuQmCC
"
        alt="GroupIcon"
        className="text-white  p-2 rounded-lg"
        style={{ fontSize: "large" , padding:'0px' , height:'39px' , width:'40px' }}
      />
      ),
      title: "Flutter",
      value: (
        <Typography variant="body1" style={{ fontSize: "1em" }}>
          Engineering Departments
        </Typography>
      ),
      description: "124 for last month",
      trendIcon: <TrendingDown className="text-red-500" />,
    },
  ];
  // const eventData = [
  //     { date: '5 Mar', title: 'Board Meeting', description: 'Attend board meeting with company manager.', backgroundColor: '#fbbf24' },
  //     { date: '9 Mar', title: 'Design Team Meeting', description: 'Attend design team meeting with team mates and HOD.', backgroundColor: '#dc2626' },
  //     { date: '7 Feb', title: 'Tech Conference', description: 'Attend conference with teammates and other departments.', backgroundColor: '#f97316' },
  //     { date: '4 Mar', title: 'Development Team Pitch', description: 'Pitch idea on new development to the company board,', backgroundColor: '#3b82f6' },
  // ];

  const avatarData = [
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "background.main" }}>
      <div className="flex flex-col">
        <div className="p-2">
          <div className="flex items-center justify-between md:w-full p-4">
            <div className="p-2">
              <h1 className="text-2xl text-neutral-500">Project Dashboard</h1>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <button className="flex  items-center text-white font-bold text-[10px] md:text-[15px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700">
                Create New Projet
              </button>
              <InfoOutlinedIcon />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-4/4">
              <div className="flex flex-col gap-4 mb-4 md:flex-row md:flex-row">
                {boxesData.map((box, index) => (
                  <Grid
                    sx={{ backgroundColor: "background.view" }}
                    key={index}
                    className="rounded-lg p-4 shadow-md md:w-1/2"
                  >
                    <p className="text-xl">{box.title}</p>
                    <div className="flex items-center mb-2">
                      <p className="w-5/6 text-xl">{box.value}</p>
                      <div className="w-1/6">{box.icon}</div>
                    </div>
                    {/* <div className="flex items-center gap-2">
                                    {box.trendIcon}
                                    <p variant="body2" className="ml-2">{box.description}</p>
                                </div> */}
                  </Grid>
                ))}
              </div>
              {/* <Charts data={data} /> */}
            </div>
            {/* <div className="w-full md:w-1/4">
                    <NoticeBoard eventData={overview?.notices} />
                    <UpcomingEvents />
                </div> */}
          </div>
          <div className="p-2">
            <Typography className="text-2xl text-neutral-500">
              Recent Project Dashboard
            </Typography>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-4/4">
              <div className="flex flex-col gap-4 mb-4 md:flex-row md:flex-row">
                {overview.slice(0,4).map((box, index) => (
                  <Grid
                    sx={{ backgroundColor: "background.view" }}
                    key={index}
                    className="rounded-lg p-4 shadow-md md:w-1/2"
                  >
                    <p className="text-xl">            {box.title.length > 10 ? `${box.title.substring(0, 15)}...` : box.title}
                    </p>
                    
                    <div className="flex items-center mb-[16px] mt-[-9px]">
                      <p className="w-5/6 ">  {(() => {
              // Function to strip HTML tags and truncate text
              const stripHtmlAndTruncate = (html, maxLength) => {
                const strippedText = html.replace(/<[^>]+>/g, '');
                return strippedText.length > maxLength
                  ? `${strippedText.substring(0, 15)}...`
                  : strippedText;
              };

              // Call the function inline to process box.description
              return stripHtmlAndTruncate(box.description, 50); // Adjust maxLength as per your requirement
            })()}</p>
                      <div className="w-1/6" style={{padding:'0'}}>{box.icon}</div>
                    </div>
                    <div className="mb-[10px] mt-[2px]">
                      <p className="text-sm " style={{ fontSize: "12px" }}>
                        Mobile App Ui Design
                      </p>
                    </div>
                    <div>
                      <div
                        className="border-1 w-full"
                        style={{ border: "0.5px solid white" }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        {avatarData.map((item) => (
                          <>
                            <div
                              class="MuiAvatar-root MuiAvatar-circular css-1m7vhif-MuiAvatar-root"
                              style={{ width: "21px", height: "22px"  , marginLeft:'-5px'}}
                            >
                              <img alt="Remy Sharp" src={item.src} />
                            </div>
                          </>
                        ))}
                      </div>
                      <div
                        className="text-cnter row"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        {" "}
                        <p
                          variant="body2"
                          style={{
                            borderRadius: "5px",
                            border: "1px solid green",
                            padding: "5px",
                            textAlign: "center",
                            height: "25px",
                            width: "51px",
                            fontSize: "10px",
                            color:"green" ,
                            borderColor:'green'
                          }}
                          className="p-2"
                        >
                          Low
                        </p>{" "}
                        <span>
                          <MoreVertIcon />
                        </span>
                      </div>
                    </div>
                  </Grid>
                ))}
              </div>
              {/* <Charts data={data} /> */}
            </div>
            {/* <div className="w-full md:w-1/4">
                    <NoticeBoard eventData={overview?.notices} />
                    <UpcomingEvents />
                </div> */}
          </div>
        </div>
        <div className="w-full  flex flex-col md:flex-row p-2">
          <div className="w-full md:w-1/1 mx-1 mb-2 md:mb-0">
            <ProjectChart barsData={barsData} />
          </div>
          <div className="w-full md:w-1/3 mx-1 mb-2 md:mb-0">
            <ProjectMilesTone />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row p-2 h-full">
          <div className="w-full md:w-3/4 mx-1 mb-2 md:mb-0 flex-grow">
            <ProjectActivity />
          </div>
          <div className="w-full md:w-1/4 mx-1 mb-2 md:mb-0 flex-grow">
            <GenderChart />
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Dashboard;
