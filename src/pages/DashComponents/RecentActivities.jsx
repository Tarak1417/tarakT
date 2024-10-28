import React from "react";
import { Box } from "@mui/material";

// Sample data for recent activities
const activities = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/40?img=1", // Profile Image URL
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
const ActivityRow = ({ activity }) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex items-center space-x-4">
      {/* Profile Image */}
      <img
        src={activity.avatar}
        alt={activity.name}
        className="w-7 h-7 rounded-full"
      />
      <div>
        <p style={{ fontFamily: "sans-serif", fontSize: '14px', width: '330px' }}>
          {activity.activity}
        </p>
        <p className="text-gray-400 text-xs">{activity.name}</p>
      </div>
    </div>

    {/* Status Tag */}
    <span
      style={{
        borderStyle: "solid",
        borderWidth: '1px',
        borderColor: "#06D17C",
        borderRadius: "8px",
        color: "#06D17C",
        backgroundColor: "#00361F80",
        fontFamily: 'sans-serif',
        fontSize: '12px'
      }}
      className="px-3 py-1"
    >
      {activity.type}
    </span>

    {/* Time */}
    <p className="text-gray-400 text-xs">{activity.time}</p>
  </div>
);

// Main Recent Activities component
const RecentActivities = () => {
  return (
    <div style={{ marginTop: '-23px' }} className="rounded-lg p-6 shadow-lg">
      {/* Header Section */}
      <Box sx={{ backgroundColor: "background.default", height: '64vh', padding: '22px', borderRadius: '12px' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 style={{ fontSize: '17px' }} className="font-semibold">Recent Activities</h2>
          <button style={{ height: "32px", fontSize: '13px', backgroundColor: "#3767B1" }} className="text-white px-4 py-2 rounded-md">
            View All
          </button>
        </div>

        {/* Activity List */}
        <div>
          {activities.map((activity) => (
            <ActivityRow key={activity.id} activity={activity} />
          ))}
        </div>
      </Box>
    </div>
  );
};

export default RecentActivities;
