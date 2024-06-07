import React, { useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabContext,
  TabPanel,
  Card,
  CardContent,
  Typography,
  Button,
  Input,
  TextField,
} from "@mui/material";

// Tabs Section
const CreateOrganization = () => {
  const [activeTab, setActiveTab] = useState(1); // Start with the second tab active

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "background.main", p: 10 }}>
      <Box sx={{ marginTop: ".7rem", paddingRight: 10 }}>
        <Typography variant="h4">
          Create an Organization to track the status of your employees
        </Typography>

        <Typography sx={{ marginTop: ".7rem" }}>
          HR organization refers to the style of coordination, communication and
          management, a team or an employee uses through out his/her contract
          with the organization.
        </Typography>

        <div className="flex justify-center py-12">
          <img
            className="origin-center"
            style={{ width: 250 }}
            src="/images/ASSETS/walkover4.png"
            alt="walkover1"
          />
        </div>

        <TextField
          name="question"
          size="small"
          variant="outlined"
          onChange={(e) => handleTabChange(e, 0)}
          placeholder="Create Organization"
          fullWidth
        />
        <div className="flex justify-end">
          <Button
            className="mb-2 ml-auto"
            variant="contained"
            sx={{ px: 5, py: 1 }}
          >
            Create
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default CreateOrganization;
