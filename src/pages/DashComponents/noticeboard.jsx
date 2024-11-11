import { Box,useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Nonoticeboard from "../../pages/DashComponents/Nonoticeboard";
import { handleAxiosError } from "../../utilities/function";
import useLoader from "../../hooks/useLoader";
import useErrorHandler from "../../hooks/useErrorHandler";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RefreshIcon from '@mui/icons-material/Refresh';
import LinkIcon from '@mui/icons-material/Link';
import hrimages1 from "../../assets/Interductionimages/Vector-1.png"
import hrimages2 from "../../assets/Interductionimages/Vector-2.png"
import hrimages3 from "../../assets/Interductionimages/Vector-3.png"
import hrimages4 from "../../assets/Interductionimages/Vector.png"


const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const { start, end } = useLoader();
  const errorHandler = useErrorHandler();

  // Fetch notices from the backend
  const fetchNotices = useCallback(async () => {
    start(); // Start loader
    try {
      const response = await axios.get("/hr/notice"); // Adjust endpoint if needed
      setNotices(response.data.notices);
    } catch (error) {
      errorHandler(error); // Handle errors using custom hook
    } finally {
      end(); // End loader
    }
  }, [errorHandler, start, end]);

  useEffect(() => {
    fetchNotices(); // Fetch notices on component mount
  }, [fetchNotices]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        borderRadius: "12px",
        padding: "20px",
        height: "228px",
        width:"auto",
        justifyItems:"stretch",
        marginBottom:"6px"
      }}
      className="shadow-lg"
    >

        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <p style={{ fontSize: "18px" }} className="mb-6 text-2xl border-l-4 pl-2 border-blue-500">
        Notice Board
      </p>

      <div style={{ display: 'flex', gap: '10px', color: 'white',marginTop:"9px" }}>
      {isMobile?"":<img src={hrimages1} alt="" className="h-4 w-4"/>}
      <img src={hrimages4} alt="" className="h-4 w-4"/>
      
      <img src={hrimages2} alt="" className="h-4 w-4"/>
      <img src={hrimages3} alt="" className="h-4 w-4"/>
    </div>
    </Box>
<div
        style={{ marginTop: "-22px" }}
        className="space-y-6 overflow-y-auto h-[340px] px-2 pb-4"
      >
        {notices.length === 0 ? (
          // No data message
          <Nonoticeboard/>
        ) : (
          // Render notices
          notices.map((notice) => (
            <div style={{ marginTop: "11px" }} key={notice._id} className="flex gap-4 items-center">
              {/* Date Box */}
              <div
                className="w-[45px] h-[45px] rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#3b82f6" }} // Default color; can be dynamic
              >
                <div
                  className="w-[42px] h-[42px] border-2 border-black rounded-lg flex items-center justify-center"
                >
                  <p style={{ fontSize: "11px" }} className="text-black text-sm text-center">
                    {formatDate(notice.createdAt)}
                  </p>
                </div>
              </div>

              {/* Notice Details */}
              <div className="flex-1">
                <h1 style={{ fontSize: "12px" }} className="text-white text-sm font-small">
                  {notice.title}
                </h1>
                <p style={{ fontSize: "9.8px" }} className="text-gray-400 text-sm">
                  {notice.content}
                </p>
              </div>
            </div>
          ))
        )}
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
