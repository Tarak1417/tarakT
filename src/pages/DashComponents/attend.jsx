import React from "react";
import { FaPhoneAlt, FaEnvelope, FaEye } from "react-icons/fa";
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Norecentattend from "../../pages/DashComponents/Norecentattendence";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CropFreeIcon from '@mui/icons-material/CropFree';
import RefreshIcon from '@mui/icons-material/Refresh';
import LinkIcon from '@mui/icons-material/Link';
import PersonProfile from "../../assets/offerLatter/Ellipse 8.png";

const attendanceData = [
 

  {
    id: "#193845039283",
    name: "Richard Webber",
    role: "UI/UX Designer",
    date: "22/10/2024",
    status: "Present",
    clockIn: "09:00:17 AM",
    clockOut: "Not yet clocked out",
    shift: "AM",
    avatar: PersonProfile,
  },
];

const StatusBadge = ({ status }) => {
  const statusStyles =
    status === "Present"
      ? "bg-[#42B8240F] text-[#6FE053] border-[#6FE053]"
      : status === "Late"
      ? "bg-[#F13B3B0F] text-[#F13B3B] border-[#F13B3B]"
      : "bg-gray-200 text-gray-600 border-gray-600"; // Fallback for other statuses

  return (
    <span
      className={`flex items-center justify-center w-24 h-8 rounded-full text-xs font-semibold border ${statusStyles}`} // Fixed width and height
    >
      {status}
    </span>
  );
};

const RecentAttendance = () => {
  const navigate = useNavigate();

  const handleRecentAttendance = () => {
    navigate("RecentAttendance");
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <Box sx={{ backgroundColor: "background.default", padding: "22px", borderRadius: "12px" }}>
        
        
        <div className="flex items-center justify-between mb-4">
         
         <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
         
          <h2 style={{ fontSize: "19px", fontFamily: "sans-serif", fontWeight: "500" ,marginRight:"720px"}}>
            Recent Attendance
          </h2>


          <div style={{ display: 'flex', gap: '10px', color: 'white',marginTop:"9px" }}>
      <OpenInFullIcon sx={{height:"14px"}} />
      <CropFreeIcon sx={{height:"16px"}} />
      <RefreshIcon sx={{height:"20px"}} />
      <LinkIcon sx={{height:"20px"}} />
    </div>
    </Box>

          <button
            onClick={handleRecentAttendance}
            style={{ backgroundColor: "#3767B1", fontFamily: "sans-serif", fontSize: "12px" }}
            className="px-4 py-2 rounded-md"
          >
            View All
          </button>
        </div>

        {/* Table or No Data Message */}
        {attendanceData.length === 0 ? (
         <Norecentattend/>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border-spacing-0">
              <thead>
                <tr>
                  <th className="text-gray-400 text-sm py-2">Employee ID</th>
                  <th className="text-gray-400 text-sm py-2">Employee</th>
                  <th className="text-gray-400 text-sm py-2">Date</th>
                  <th className="text-gray-400 text-sm py-2">Status</th>
                  <th className="text-gray-400 text-sm py-2">Clock In</th>
                  <th className="text-gray-400 text-sm py-2">Clock Out</th>
                  <th className="text-gray-400 text-sm py-2">Shift</th>
                  <th className="text-gray-400 text-sm py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-4">{entry.id}</td>
                    <td className="flex items-center space-x-4 py-4">
                      <img
                        src={entry.avatar}
                        alt={entry.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p style={{ fontFamily: "sans-serif", fontSize: "14px" }}>
                          {entry.name}
                        </p>
                        <p className="text-gray-400 text-xs">{entry.role}</p>
                      </div>
                    </td>
                    <td style={{ fontFamily: "sans-serif", fontSize: "13px" }} className="py-4">{entry.date}</td>
                    <td className="py-4">
                      <StatusBadge status={entry.status} />
                    </td>
                    <td style={{ fontFamily: "sans-serif", fontSize: "13px" }} className="py-4">{entry.clockIn}</td>
                    <td style={{ fontFamily: "sans-serif", fontSize: "13px" }} className="py-4">{entry.clockOut}</td>
                    <td style={{ fontFamily: "sans-serif", fontSize: "13px" }} className="py-4">{entry.shift}</td>
                    <td className="flex items-center space-x-4 py-4">
                      <button className="text-green-400">
                        <FaPhoneAlt />
                      </button>
                      <button className="text-blue-400">
                        <FaEnvelope />
                      </button>
                      <button className="text-gray-400">
                        <FaEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Box>
    </div>
  );
};

export default RecentAttendance;
