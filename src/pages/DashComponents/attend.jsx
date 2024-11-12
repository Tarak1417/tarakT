import React from "react";
import { FaPhoneAlt, FaEnvelope, FaEye } from "react-icons/fa";
import { Box,useMediaQuery, useTheme } from "@mui/material";
import { text } from "@fortawesome/fontawesome-svg-core";
import hrimages1 from "../../assets/Interductionimages/Vector-1.png"
import hrimages2 from "../../assets/Interductionimages/Vector-2.png"
import hrimages3 from "../../assets/Interductionimages/Vector-3.png"
import hrimages4 from "../../assets/Interductionimages/Vector.png"
import Norecentattendence from "./Norecentattendence";


const attendanceData = [
  // {
  //   id: "#193845039283",
  //   name: "Richard Webber",
  //   role: "UI/UX Designer",
  //   date: "22/10/2024",
  //   status: "Present",
  //   clockIn: "09:00:17 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=3",
  // },
  // {
  //   id: "#995830128543",
  //   name: "Desmond Jakes",
  //   role: "Frontend Developer",
  //   date: "22/10/2024",
  //   status: "Late",
  //   clockIn: "09:40:17 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=8",
  // },
  // {
  //   id: "#995839202395",
  //   name: "Jaxson Schleifer",
  //   role: "Frontend Developer",
  //   date: "22/10/2024",
  //   status: "Present",
  //   clockIn: "09:00:03 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=10",
  // },
  // {
  //   id: "#294857104856",
  //   name: "Cynthia Eze",
  //   role: "Software Engineer",
  //   date: "22/10/2024",
  //   status: "Present",
  //   clockIn: "09:00:05 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=4",
  // },
  // {
  //   id: "#775839203848",
  //   name: "Erin Herwitz",
  //   role: "Digital Marketer",
  //   date: "22/10/2024",
  //   status: "Present",
  //   clockIn: "09:00:07 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=5",
  // },
  // {
  //   id: "#775839205548",
  //   name: "Erin Herwitz",
  //   role: "Digital Marketer",
  //   date: "22/10/2024",
  //   status: "Present",
  //   clockIn: "09:00:07 AM",
  //   clockOut: "Not yet clocked out",
  //   shift: "AM",
  //   avatar: "https://i.pravatar.cc/40?img=5",
  // },
];



const StatusBadge = ({ status}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const statusStyles =
    status === "Present"
      ? "bg-[#42B8240F] text-[#6FE053] border-[#6FE053]"
      : status === "Late"
      ? "bg-[#F13B3B0F] text-[#F13B3B] border-[#F13B3B]"
      : "bg-gray-200 text-gray-600 border-gray-600"; // Fallback for other statuses

  return (
    <span
      className={`flex items-center justify-center rounded-full  font-semibold border ${statusStyles} ${
        isMobile ? "w-10 h-6 text-[6px]" : "w-24 h-8 text-xs"
      }`} // Adjust width, height, and text size for mobile
    >
      {status}
    </span>
  );
};

const RecentAttendance = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={`rounded-lg shadow-lg ${isMobile?"mt-[5px]":"mt-1"} `}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "background.default",
          padding: "22px",
          borderRadius: "12px",
          width: "auto",
          height: { xs: "auto", md: "87vh" },
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2
            style={{
              fontSize: "19px",
              fontFamily: "sans-serif",
              fontWeight: "500",
            }}
          >
            Recent Attendance
          </h2>
        <div style={{ display: 'flex', alignItems:"center", gap: '10px'}}>
       {isMobile?"":<img src={hrimages1} alt="" className="h-4 w-4"/>}
      <img src={hrimages4} alt="" className="h-4 w-4"/>
      
      <img src={hrimages2} alt="" className="h-4 w-4"/>
      <img src={hrimages3} alt="" className="h-4 w-4"/>

         
          <button
  style={{
    backgroundColor: "#3767B1",
    fontFamily: "sans-serif",
    fontSize: "12px",
  }}
  className={`px-4 py-2 rounded-md ${isMobile ? 'hidden' : ''}`}
>
  View All
</button>
</div>
        </div>


        {attendanceData.length===0?<Norecentattendence/>:

        <div
  style={{
    overflow: "auto",
    scrollbarWidth: "none", // Hides scrollbar in Firefox
    msOverflowStyle: "none", // Hides scrollbar in older Internet Explorer versions
  }}
>
<table className="w-full text-left border-collapse border-spacing-0">
  <thead>
    <tr>
      {!isMobile && (
        <th className="text-gray-400 text-sm py-3">EmployeeID</th>
      )}
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>Employee</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[50px] text-[10px]" : ""}`}>Date</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[20px] text-[10px]" : ""}`}>Status</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>ClockIn</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>ClockOut</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>Shift</th>
      <th className={`text-gray-400 text-sm py-3 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {attendanceData.map((entry) => (
      <tr key={entry.id}>
        {!isMobile && (
          <td className="py-5 truncate">{entry.id}</td>
        )}
        <td className={`flex items-center space-x-4 py-5 ${isMobile ? "pr-[-20px] text-[10px] ml-[-15px]" : ""}`}>
          <img
            src={entry.avatar}
            alt={entry.name}
            className={`${isMobile ? "w-5 h-5 rounded-full mr-[-10px] ml-[10px]" : "w-10 h-10 rounded-full"}`}
          />
          <div>
            <p style={{ fontFamily: "sans-serif", fontSize: isMobile ? "10px" : "14px" }} className="truncate">
              {entry.name}
            </p>
            <p className={`text-gray-400 truncate ${isMobile ? "text-[6px]" : "text-xs"}`}>
              {entry.role}
            </p>
          </div>
        </td>
        <td style={{ fontFamily: "sans-serif", fontSize: "13px" }} className={`py-5 ${isMobile ? "pl-[30px] text-[10px] text-[10px]" : ""}`}>
          {entry.date}
        </td>
        <td className={`py-5 ${isMobile ? "pl-[20px] text-[10px]" : ""}`}>
          <StatusBadge status={entry.status} />
        </td>
        <td style={{ fontFamily: "sans-serif", }} className={`py-5 ${isMobile ? "pl-[10px] text-[10px]" : "text-[13px]"}`}>
          {entry.clockIn}
        </td>
        <td style={{ fontFamily: "sans-serif",  }} className={`py-5 truncate ${isMobile ? "pl-[10px] text-[10px]" : "text-[13px]"}`}>
          {entry.clockOut}
        </td>
        <td style={{ fontFamily: "sans-serif", }} className={`py-5 ${isMobile ? "pl-[15px] text-[10px]" : "text-[13px]"}`}>
          {entry.shift}
        </td>
        <td className={`flex items-center space-x-4 py-5 ${isMobile ? "pl-[10px] text-[10px]" : ""}`}>
          <button className="text-green-400"><FaPhoneAlt /></button>
          <button className="text-blue-400"><FaEnvelope /></button>
          <button className="text-gray-400"><FaEye /></button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

</div>
}

        <div className=" mt-4">
          <button
            style={{  color: "blue" }}
            className={`px-4 py-2 rounded-md text-sm font-medium ${isMobile?"":"hidden"}`}
          >
            View All
          </button>
        </div>
      </Box>
    </div>
  );
};

export default RecentAttendance;
