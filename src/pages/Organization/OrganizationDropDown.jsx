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

const OrganizationDropDown = () => {
  const [selectedValue, setSelectedValue] = useState("");
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
          setSelectedValue(currentOrg._id);
        }
      }
    } catch (e) {
      console.log("Error List of Organization", e);
    }
  }, [setSelectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    let selectedOrg = organizations.find(
      (item) => item._id === event.target.value
    );
    handleSelect(selectedOrg);
  };

  async function handleSelect(org) {
    if (org.status) {
      try {
        const response = await axios.post(`/hr/organization/select`, {
          organizationId: org._id,
        });
        let data = response.data;
        if (data.success) {
          sessionStorage.setItem("org", JSON.stringify(org));
        }
      } catch (e) {
        console.log("Error select of Organization", e);
      }
    }
  }

  useEffect(() => {
    getOrganizations();
  }, []);

  return (
    <div>
      <div className="relative flex justify-between">
        <div
          className="bg-transparent text-xl text-gray-500 w-full "
          onClick={toggleListVisibility}
        >
          {selectedValue}
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
          className={`absolute transition-opacity duration-400 w-full ${
            isListVisible ? "opacity-100 z-50" : "opacity-0 z-0"
          }`}
          style={{ background: "white" }}
        >
          {isListVisible && (
            <Box
              sx={{
                width: "100%",
                maxWidth: 360,
                backgroundColor: "background.main",
                border: 1,
                borderColor: "#e7e3e3",
              }}
              className="rounded-b-lg shadow-lg"
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <div className="w-4 h-4 bg-red-500 rounded-full ml-1.5 mr-5">
                        {" "}
                      </div>{" "}
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    <TaskAltIcon />
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {" "}
                      <AddCircleOutlineOutlinedIcon />{" "}
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
