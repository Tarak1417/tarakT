import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const NoticeBoard = ({ eventData }) => {
  const demoEvent = [
    {
      date: "2024-02-03",
      title: "Board Meeting",
      description: "Attend board meeting with company manager.",
      backgroundColor: "#fbbf24", // Yellow
    },
    {
      date: "2024-02-09",
      title: "Design Team Meeting",
      description: "Attend design team meeting with teammates and HOD.",
      backgroundColor: "#dc2626", // Red
    },
    {
      date: "2024-02-15",
      title: "Tech Conference",
      description: "Attend conference with teammates and other departments.",
      backgroundColor: "#ef4444", // Soft Red
    },
    {
      date: "2024-02-23",
      title: "Development Team Pitch",
      description: "Pitch idea on new development to the company board.",
      backgroundColor: "#3b82f6", // Blue
    },
  ];

  const [datastore, setStore] = useState([{
    date: "2024-02-23",
    title: "Development Team Pitch",
    description: "Pitch idea on new development to the company board.",
    backgroundColor: "#3b82f6", // Blue
  },]);

  useEffect(() => {
    setStore(eventData || demoEvent); // Use provided eventData or demo data
  }, [eventData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Box
      sx={{
        backgroundColor:'background.default',
        borderRadius: "12px",
        padding: "20px",
        height:'327px'
        
      }}
      className="shadow-lg"
    >
      <p style={{fontSize:'18px'}} className="mb-6  text-2xl  border-l-4 pl-2 border-blue-500">
        Notice Board
      </p>
      <div style={{marginTop:'-22px'}}  className="space-y-6 overflow-y-auto h-[340px] px-2 pb-4">
        {demoEvent.map((event, index) => (
          <div style={{marginTop:"11px"}} key={index} className="flex gap-4 items-center">
            {/* Date Box */}
            <div 
              className="w-[45px] h-[45px] rounded-lg flex items-center  justify-center"
              style={{ backgroundColor: event.backgroundColor ,}}
            >
              <div  className="w-[42px] h-[42px] border-2 border-black rounded-lg flex items-center justify-center">
                <p style={{fontSize:'11px'}} className="text-black text-sm  text-center">
                  {formatDate(event.date)}
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1">
              <h1 style={{fontSize:'12px'}} className="text-white text-sm font-small">{event.title}</h1>
              <p style={{fontSize:'9.8px'}} className="text-gray-400 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-y-auto {
          scrollbar-width: none;
        }
      `}</style>
    </Box>
  );
};

export default NoticeBoard;
