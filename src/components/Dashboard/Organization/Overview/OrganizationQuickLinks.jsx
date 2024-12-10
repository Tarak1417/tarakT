import React from "react";
import { Avatar, Grid, IconButton } from "@mui/material";
import { TiPlus } from "react-icons/ti";

export default function OrganizationQuickLinks() {
  return (
    <Grid
      sx={{ backgroundColor: "background.default", flexDirection: "column" }}
      className="min-w-64 h-fit flex flex-col gap-3 justify-center items-center rounded-lg p-5 border border-gray-800 "
    >
      <div className="w-full flex flex-row gap-3 justify-between items-center">
        <div>
          <h1>Quick Links</h1>
        </div>
        <div>
          <IconButton>
            <TiPlus />
          </IconButton>
        </div>
      </div>
      <div className="w-full flex flex-row gap-3 justify-between items-center">
        <div>
          <h1>No quick links</h1>
        </div>
      </div>
    </Grid>
  );
}
