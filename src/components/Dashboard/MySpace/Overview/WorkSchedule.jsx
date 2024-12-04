import React from "react";
import { Button, Grid } from "@mui/material";
import { RiCalendarScheduleLine } from "react-icons/ri";

export default function WorkSchedule() {
  return (
    <Grid
      className="w-full flex gap-2 px-2 py-4 justify-between items-center rounded-lg shadow-md border border-gray-800"
      sx={{ backgroundColor: "background.default" }}
    >
      <div className="w-full flex gap-3 justify-start items-center ">
        <div className="bg-blue-400 bg-opacity-10 rounded-lg p-2">
          <RiCalendarScheduleLine className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h1>Work Schedule</h1>
          <h1 className="text-xs text-zinc-400">01 December - 07 December</h1>
        </div>
      </div>
    </Grid>
  );
}
