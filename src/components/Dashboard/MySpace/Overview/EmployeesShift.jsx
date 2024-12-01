import React from "react";
import { Avatar } from "@mui/material";

export default function EmployeesShift() {
  return (
    <div className="w-full flex gap-3 p-3 flex-col justify-start items-start">
      <div>
        <h1>
          Employees on <span className="text-blue-400">AM Shift</span>
        </h1>
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <div>
          <Avatar
            alt="Steward Graham"
            sx={{ height: "2.5rem", width: "2.5rem" }}
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <h1>Steward Graham</h1>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs">Present</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <h1>CEO</h1>
            <span className="text-xs text-red-500">Not Yet Clocked-in</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <div>
          <Avatar
            alt="Steward Graham"
            sx={{ height: "2.5rem", width: "2.5rem" }}
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <h1>Steward Graham</h1>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-xs">Absent</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <h1>CEO</h1>
            <span className="text-xs text-blue-400">Clocked-in</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <div>
          <Avatar
            alt="Steward Graham"
            sx={{ height: "2.5rem", width: "2.5rem" }}
            src="/static/images/avatar/1.jpg"
          />
        </div>
        <div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <h1>Steward Graham</h1>
            <div className="flex flex-row gap-1 justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs">Present</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <h1>CEO</h1>
            <span className="text-xs text-blue-400">Clocked-in</span>
          </div>
        </div>
      </div>
    </div>
  );
}
