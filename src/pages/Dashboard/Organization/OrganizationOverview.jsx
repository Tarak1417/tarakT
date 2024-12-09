import React, { useState } from "react";
import { Button, Grid, Tab, Tabs } from "@mui/material";
import { CompanyPreview, OrganizationQuickLinks } from "../../../components";

export default function Overview() {
  const [switchScreen, setSwitchScreen] = useState({
    first: "services",
  });

  const handleSwitchScreen = (screen) => {
    setSwitchScreen(screen);
  };

  const tabs = [
    { label: "Services", value: "services" },
    { label: "Location", value: "location" },
  ];
  const currentTabIndex = tabs.findIndex(
    (tab) => tab.value === switchScreen.first
  );

  const handleTabChange = (event, newValue) => {
    const selectedTab = tabs[newValue];
    handleSwitchScreen({
      first: selectedTab.value,
    });
  };

  const options = [
    {
      label: "Onboarding",
      icon: "",
      link: "/onboarding",
    },
    {
      label: "Attendance",
      icon: "",
      link: "/Attendance",
    },
    {
      label: "Performance",
      icon: "",
      link: "/Performance",
    },
    {
      label: "Employee Engagement",
      icon: "",
      link: "/EmployeeEngagement",
    },
    {
      label: "HR Letters",
      icon: "",
      link: "/HRLetters",
    },
    {
      label: "Tasks",
      icon: "",
      link: "/Tasks",
    },
    {
      label: "General",
      icon: "",
      link: "/General",
    },
    {
      label: "Leave Tracker",
      icon: "",
      link: "/LeaveTracker",
    },
    {
      label: "Time Tracker",
      icon: "",
      link: "/TimeTracker",
    },
    {
      label: "Files",
      icon: "",
      link: "/Files",
    },
    {
      label: "Cases",
      icon: "",
      link: "/Cases",
    },
    {
      label: "Travel",
      icon: "",
      link: "/Travel",
    },
    {
      label: "Compensation",
      icon: "",
      link: "/Compensation",
    },
  ];

  return (
    <div className="w-full h-full flex gap-3 flex-row justify-between items-start">
      <div className="w-fit h-full flex gap-3 flex-col justify-center items-start">
        <CompanyPreview />
        <OrganizationQuickLinks />
      </div>
      <div className="w-full h-full flex gap-3 flex-col justify-center items-start">
        <Grid
          sx={{
            backgroundColor: "background.default",
          }}
          className="w-full flex flex-row  justify-between items-center"
        >
          <Tabs
            value={currentTabIndex}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="Navigation Tabs"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Grid>
        <div className="w-full h-full flex flex-col gap-3">
          {switchScreen.first === "services" ? (
            <>
              <div className="w-full h-full grid grid-cols-2 gap-3">
                {options.map((option) => {
                  return (
                    <button
                      onClick={() => {
                        alert(option.link);
                      }}
                      className="text-start p-4 rounded-lg border border-gray-800 cursor-pointer"
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <></>
          )}
          {switchScreen.first === "location" ? (
            <>
              <div className="text-center p-4 rounded-lg border border-gray-800 cursor-pointer">
                <h1>No Location Found</h1>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
