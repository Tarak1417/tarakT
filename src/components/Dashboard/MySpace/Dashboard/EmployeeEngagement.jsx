import { Grid, Divider } from "@mui/material";
import React from "react";

export default function EmployeeEngagement() {
  return (
    <Grid
      sx={{ height: "20rem", backgroundColor: "background.default" }}
      className="min-h-80 w-96 px-2 rounded-lg bg-slate-400"
    >
      <div className="py-2">
        <h1>Employee Engagement</h1>
      </div>
      <Divider
        sx={{
          borderColor: "gray",
        }}
      />
      <div className="w-full h-full flex justify-center items-center">
        No Data Found
      </div>
    </Grid>
  );
}