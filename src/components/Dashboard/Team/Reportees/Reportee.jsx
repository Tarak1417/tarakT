import { Avatar, Grid } from "@mui/material";
import React from "react";

export default function Reportee() {
  return (
    <Grid
      sx={{
        backgroundColor: "background.default",
      }}
      className="w-full h-full flex gap-3 p-3 flex-row justify-start items-center rounded-lg border border-gray-700"
    >
      <div>
        <Avatar
          alt="Steward Graham"
          sx={{ height: "50px", width: "50px" }}
          src=""
        />
      </div>
      <div className="text-sm">
        <h1>S19 - Michael Johnson</h1>
        <h1 className="text-gray-400">Administration</h1>
        <h1 className="text-red-500 text-xs">Not Yet Clocked-in</h1>
      </div>
    </Grid>
  );
}
