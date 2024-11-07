import React, { useCallback, useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaEye } from "react-icons/fa";
import { Box } from "@mui/material";
import dayjs from "dayjs";
import { BorderColor, BorderStyle } from "@mui/icons-material";
import axios from "axios";

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

const RecentAttendance = ({attendanceData=[],isDashboardCall}) => {
  const [attendance, setAttendance] = useState(attendanceData);
  const fetchAttendanceData = useCallback(async () => {
    try {
      const response = await axios.get(`/hr/attendance/recent`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    setAttendance(response.data.attendance)
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if(!isDashboardCall)
    fetchAttendanceData();
  else
  setAttendance(attendanceData)
    
  }, [attendanceData, fetchAttendanceData, isDashboardCall])
  //useEffect(() => {setAttendance(attendanceData)},[attendanceData])

  return (
    <div className="p-6 rounded-lg shadow-lg">
      {/* Header */}
      <Box sx={{ backgroundColor: "background.default", padding: "22px", borderRadius: "12px" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 style={{fontSize:"19px",fontFamily:"sans-serif",fontWeight:"500"}} className="">Recent Attendance</h2>
         {isDashboardCall && <button style={{backgroundColor:"#3767B1",fontFamily:"sans-serif",fontSize:"12px"}} className=" px-4 py-2 rounded-md">
            View All
          </button>
}
        </div>

        {/* Table */}
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
              {attendance ? attendance?.map((entry) => (
                <tr key={entry._id}>
                  <td className=" py-4">{entry.employeeId}</td>
                  <td className="flex items-center space-x-4 py-4">
                    <img
                      src={`https://ui-avatars.com/api/?name=${entry.employeeData.firstName} ${entry.employeeData.lastName}`}
                      alt={entry.employeeData.firstName+" " + entry.employeeData.lastName}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p style={{fontFamily:"sans-serif",fontSize:"14px"}} className="">
                        {entry.employeeData.firstName+" " + entry.employeeData.lastName}
                      </p>
                      <p className="text-gray-400 text-xs">{entry.employeeData.role || ""}</p>
                    </div>
                  </td>
                  <td style={{fontFamily:"sans-serif",fontSize:"13px"}} className=" py-4">{dayjs(entry.clockInTime).format("DD/MM/YYYY")}</td>
                  <td className="py-4">
                    <StatusBadge sx={{fontWeight:"100",}} status={entry.status} />
                  </td>
                  <td  style={{fontFamily:"sans-serif",fontSize:"13px"}} className="py-4">{dayjs(entry.clockInTime).format("hh:mm:ss A")}</td>
                  <td style={{fontFamily:"sans-serif",fontSize:"13px"}} className=" py-4">{entry.clockOutTime ? dayjs(entry.clockOutTime).format("hh:mm:ss A") : "Not yet clocked out"}</td>
                  <td style={{fontFamily:"sans-serif",fontSize:"13px"}} className=" py-4">{dayjs(entry.clockInTime).format("A")}</td>
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
              )) 
            : "Loading...."
            }
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  );
};

export default RecentAttendance;
