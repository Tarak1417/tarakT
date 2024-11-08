import React, { useState,useEffect, useCallback } from "react";
import { Box, Button, Typography, Avatar, LinearProgress } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";
import { Link } from 'react-router-dom';
import { useMessage } from "../../components/Header";
import axios from 'axios';

const Applicationleave = (props) => {
  //console.log("eventData",eventData);
  //eventData=eventData.eventData
  const {eventData,fetchOverview}=props
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let initialLeaveData={}
  if(eventData){
    const dates=eventData.dates
    const from = dates && dates[0]? dayjs(`${dates[0].year}-${dates[0].month}-${dates[0].day}`).format('DD/MM/YYYY'):"";
 // const to = dayjs(`${dates[1].year}-${dates[1].month}-${dates[1].day}`).format('DD/MM/YYYY');
  
  // Calculate the difference in days
  const daysDifference = dates && dates[1]? dayjs(`${dates[1].year}-${dates[1].month}-${dates[1].day}`).diff(dayjs(`${dates[0].year}-${dates[0].month}-${dates[0].day}`), 'day'):1;
    // Initial leave data
     initialLeaveData = {
      _id:eventData._id,
      name: eventData.fullName,
      role: eventData.department,
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      leaveDate: from,
      days: daysDifference,
      appliedOn: dayjs(eventData.createdAt).format("DD-MM-YYYY"),
      remainingLeaves: 12,
      totalLeaves: 12, // Assuming the user has a total of 12 leaves
      reason:eventData.reason
    };
  }
  

  // State to manage leave data
  const [leaveData, setLeaveData] = useState(initialLeaveData);

  useEffect(() => {setLeaveData(initialLeaveData)},[initialLeaveData])
  const { showError, showSuccess } = useMessage();
    const [acceptLoading, setAcceptLoading] = useState(false);
  const acceptLeave = useCallback(
    async function (id) {
        setAcceptLoading(true);
        try {
            const res = await axios.post(`/hr/attendance/leaves/approve/${id}`);
            fetchOverview();
            const { success, message } = res.data;
            if (success) return showSuccess(message);
            showError(message);
        } catch (e) {
            console.log(e);
        } finally {
            setAcceptLoading(false);
        }
    },
    [fetchOverview, showSuccess, showError]
);


const rejectLeave = useCallback(
  async function (id) {
      try {
          const res = await axios.post(`/hr/attendance/leaves/deny/${id}`);
          fetchOverview();
          const { success, message } = res.data;
          if (success) return showSuccess(message);
          showError(message);
      } catch (e) {
          showError(e);
      }
  },
  [fetchOverview, showSuccess, showError]
);


  // Calculate the progress based on remaining leaves
  const progress = ((leaveData.totalLeaves - leaveData.remainingLeaves) / leaveData.totalLeaves) * 100;

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderRadius: "16px",
        padding: "24px",

        height: "220px",

        margin: "20px auto",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <Typography style={{ fontSize: '15px', marginTop: '-16px' }} variant="h6">
          Recent Leave Application
        </Typography>
        <Link to="/leaveapplication/view">
        <Button
          variant="contained"
          size="small"
          sx={{
            height: '27px',
            fontSize: '10px',
            backgroundColor: "#3767B1",
            textTransform: "none",
            marginTop: '-13px',
            "&:hover": { backgroundColor: "#3767B1" },
          }}
        >
          View All
        </Button>
                        </Link>
        
      </div>
{eventData ? <>
      <div style={{ marginTop: "-11px" }} className="flex items-center gap-4 mb-4">
        <Avatar src={`https://ui-avatars.com/api/?name=${leaveData.name}`} alt={leaveData.name} sx={{ width: 30, height: 30, borderRadius: '25px', marginTop: '-14px' }} />
        <div>
          <Typography sx={{ fontSize: '13px', marginTop: '-8px' }} variant="h6" >
            {leaveData.name}
          </Typography>
          <Typography sx={{ fontSize: "11px" }} className="text-gray-400 text-sm">{leaveData.role}</Typography>
        </div>
      </div>

      <div style={{ marginTop: "-12px" }} className="flex items-center gap-4 mb-4">
        <CalendarMonthIcon sx={{ color: "#9ca3af", height: "16px", marginTop: '-5px' }} />
        <div style={{ display: 'flex' }}>
          <Typography sx={{ fontSize: '11px' ,fontWeight:"bold"}} >{leaveData.leaveDate}</Typography>
          <Button
            size="small"
            sx={{
              textTransform: "none",
              height: '18px',
              width: '14px',
              minWidth: '43px',
              marginLeft: '17px',
              fontSize: '7px',
              color: "white",
              backgroundColor: '#3DA6DC4D',
              "&:hover": { backgroundColor: "#3b82f6", color: "#fff" },
            }}
          >
            {leaveData.days} Day
          </Button>
        </div>
      </div>

      <Typography
        className="text-gray-400 text-xs mb-2"
        sx={{ marginBottom: "8px", fontSize: '10px', marginTop: '-16px' }}
      >
        Applied On: {leaveData.appliedOn}
      </Typography>

      {/* Indicator for Leave Status */}
      <LinearProgress variant="determinate" value={progress} sx={{ height: '4px', borderRadius: '4px', marginY: '8px', backgroundColor: '#4b5563', '& .MuiLinearProgress-bar': { backgroundColor: '#3b82f6' } }} />

      <div style={{ fontSize: '10px' }} className="flex justify-between items-center mb-4">
        <Typography sx={{ fontSize: '10px', marginTop: '-8px' }} variant="body2" className="text-gray-400">
          Remaining Leaves
        </Typography>
        <Typography sx={{ fontSize: '10px' }} className="text-white">{leaveData.remainingLeaves}</Typography>
      </div>

      <Typography sx={{ marginTop: "-22px", fontSize: '12px', fontWeight: 'bold' }} variant="subtitle1" className="mb-2">
        Reason
      </Typography>
      <Typography sx={{ fontSize: '9px' }} className="text-gray-400 text-sm mb-4">{leaveData.reason}</Typography>

      <div className="flex justify-between">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#3b82f6",
            color: "#3b82f6",
            textTransform: "none",
            borderRadius: '8px',
            fontSize: "12px",
            width: "140px",
            height: '24px',
            fontWeight: 'none',
            "&:hover": {
              backgroundColor: "#3b82f6",
              color: "#fff",
              borderColor: "#3b82f6",
            },
          }}
          disabled={acceptLoading}
          onClick={() => acceptLeave(leaveData?._id)}
        >
          Accept
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#ef4444",
            color: "#ef4444",
            textTransform: "none",
            borderRadius: '8px',
            fontSize: "12px",
            height: '24px',
            width: "140px",
            "&:hover": {
              backgroundColor: "#ef4444",
              color: "#fff",
              borderColor: "#ef4444",
            },
          }}
          onClick={() => rejectLeave(leaveData?._id)}
        >
          Reject
        </Button>
      </div>
      </>
      :"No leaves found"
}
    </Box>
  );
};


export default Applicationleave;

