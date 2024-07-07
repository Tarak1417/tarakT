import axios from "axios";
import Box from "@mui/material/Box";

import React, { useCallback, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Avatar } from "@mui/material";
const colorHexCodes = [
  "#e57373", // Red
  "#f06292", // Green
  "#ba68c8", // Blue
  "#9575cd", // Pink
  "#7986cb", // Cyan
  "#64b5f6", // Orange
  "#ff8a65", // Purple
  "#a1887f", // Yellow
  "#33FF8F", // Lime
  "#FF3385", // Magenta
  "#333FFF", // Indigo
  "#FF3385", // Fuchsia
  "#4A4A4A", // Dark Gray
  "#B5B5B5", // Light Gray
  "#000000", // Black
  "#FFFFFF"  // White
];


const OrganizationDropDown = () => {
  const [selectedValue, setSelectedValue] = useState({name : "n/a" , _id : "0"});
  const [organizations, setOrganization] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const getOrganizations = useCallback(async () => {
    try {
      const response = await axios.get(`/hr/organization`);
      let data = response.data;
      if (data.success) {
        let tempData = data.data.filter((item) => item.status);
        setOrganization(tempData);
        let currentOrg = sessionStorage.getItem("org");
        if (currentOrg) {
          currentOrg = JSON.parse(currentOrg);
          setSelectedValue(currentOrg);
        }
      }
    } catch (e) {
      console.log("Error List of Organization", e);
    }
  }, [setSelectedValue]);

  async function handleChange(org) {
    if (org.status) {
      try {
        const response = await axios.post(`/hr/organization/select`, {
          organizationId: org._id,
        });
        let data = response.data;
        if (data.success) {
          sessionStorage.setItem("org", JSON.stringify(org));
          setSelectedValue(org);
          toggleListVisibility()
        }
      } catch (e) {
        console.log("Error select of Organization", e);
      }
    }
  }

  useEffect(() => {
    getOrganizations();
  }, []);

  function getFirstCharacter(str) {
    
    if (str.length === 0) {
      return '';
    }
    return str.charAt(0).toUpperCase();
  }
  



  return (
    <div>
      <div className="relative flex justify-between">
        <div
          className="bg-transparent text-xl text-gray-500 w-full "
          onClick={toggleListVisibility}
        >
          {selectedValue?.name ?? 'N/A' }
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-2 text-gray-700">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative">
        <div
          className={` mt-2 absolute transition-opacity duration-400 w-full ${
            isListVisible ? "opacity-100 z-50" : "opacity-0 z-0"
          }`}
          style={{  fontSize:"18px" }}
        >
          {isListVisible && (
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                backgroundColor: "background.default",
                border: 1,
                borderColor: "custom.border",
                borderBottomRightRadius :25 ,
                borderBottomLeftRadius : 25
              }}
              className="shadow-lg"
            >
              <List    >
              {organizations.map((item, index) => (   
                <ListItem  key={index} disablePadding  onClick={ ()=>handleChange(item)}>
                  <ListItemButton>
                    <ListItemIcon>
                      
                      <Avatar sx={{ bgcolor: colorHexCodes[(index%10 )] , width: 25, height: 25 , fontSize:12 }}>{getFirstCharacter (item?.name)}</Avatar>
                      {/* <div className="w-4 h-4 bg-red-500 rounded-full ml-1.5 mr-5">
                        {" "}
                      </div>{" "} */}
                    </ListItemIcon>
                    <ListItemText primary= {item.name} />
                   { item._id === selectedValue?._id  && <TaskAltIcon sx={{  width: 20, height: 20  }} /> } 
                  </ListItemButton>
                </ListItem>
                   ))}
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddCircleOutlineOutlinedIcon  sx={{  width: 20, height: 20  }} />
                    </ListItemIcon>
                    <ListItemText primary="Add " />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          )}
        </div>
      </div>

      {/* <select
        className="appearance-none bg-transparent text-xl  text-gray-500 w-full focus:outline-none focus:outline-none  focus:border-none  border-none"
        value={selectedValue}
        onChange={handleChange}
      >
        {organizations.map((item, index) => (
          <option
            key={index}
            className=" bg-transparent mx-2 text-base text-gray-400"
            value={item._id}
          >
            {item.name}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default OrganizationDropDown;
