import React from "react";
import { Box, Button, Typography, useMediaQuery, Avatar, Stack } from "@mui/material";
import { useTheme } from "@mui/system";

// Sample data for recent activities
const activities = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Daniel Thompson",
    activity: "Add list permission on the member list issue",
    type: "Issue",
    time: "38 minutes ago",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Daniel Thompson",
    activity: "Add list permission on the member list issue",
    type: "Issue",
    time: "40 minutes ago",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Daniel Thompson",
    activity: "New Add list permission on the member list issue",
    type: "Issue",
    time: "45 minutes ago",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Daniel Thompson",
    activity: "Work progress % calculation issue has been added",
    type: "Issue",
    time: "45 minutes ago",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/40?img=1",
    name: "Daniel Thompson",
    activity: "Work progress % calculation issue has moved",
    type: "Issue",
    time: "50 minutes ago",
  },
];

// Single activity row component
const ActivityRow = ({ activity, isMobile }) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    spacing={2}
    py={1.5}
    px={1}
  
    sx={{
      flexDirection: isMobile ? "row" : "row",
      textAlign: isMobile ? "left" : "left",
      
    }}
  >
    <Stack direction="row" alignItems="center" spacing={2} flexGrow={1}>
      <Avatar src={activity.avatar} alt={activity.name} sx={{ width: 30, height: 30 }} />
      <Box sx={{ textAlign: isMobile ? "left" : "left", flexGrow: 1 }}>
        <Typography sx={{ fontFamily: "sans-serif", fontSize: "14px" }}>
          {activity.activity}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          { activity.name}
        </Typography>
      </Box>
    </Stack>

    <Box
      sx={{
        px: 2,
        py: 0.5,
        border: "1px solid #06D17C",
        borderRadius: "8px",
        color: "#06D17C",
        backgroundColor: "#00361F80",
        fontFamily: "sans-serif",
        fontSize: "12px",
        textAlign: "center",
        minWidth: isMobile ? "80px" : "auto",
        mt: isMobile ? 1 : 0,
        
      }}
    >
      {activity.type}
    </Box>

    <Typography variant="caption" color="textSecondary" sx={{ mt: isMobile ? 1 : 0 }}>
    {isMobile ? `${activity.time.split(" ")[0]}m` : activity.time}
    </Typography>
  </Stack>
);

// Main Recent Activities component
const RecentActivities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
   
      p={2}
      boxShadow={3}
      borderRadius="12px"
      bgcolor="background.default"
      height="85vh"
     width="auto"
      overflow="auto"
     
    >
      {/* Header Section */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" sx={{ fontSize: "17px", fontWeight: "bold" }}>
          Recent Activities
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#3767B1",
            fontSize: "13px",
            height: "",
            color: "white",
            textTransform: "none",
           
          }}
        >
          View All
        </Button>
      </Stack>

      {/* Activity List */}
      {activities.map((activity) => (
        <ActivityRow key={activity.id} activity={activity} isMobile={isMobile} />
      ))}
    </Box>
  );
};

export default RecentActivities;
