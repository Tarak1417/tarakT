import React from "react";
import { Grid } from "@mui/material";
import NoGroup from "../../../../../assets/Interductionimages/Board.png";

export default function Groups() {
  return (
    <Grid
      sx={{
        backgroundColor: "background.default",
      }}
      className="w-full h-fit flex p-3 justify-center items-center rounded-lg border border-gray-800"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <img src={NoGroup} alt="" />
        <h1>You are not associated with any group yet</h1>
      </div>
    </Grid>
  );
}