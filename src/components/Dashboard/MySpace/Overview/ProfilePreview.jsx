import React, { useCallback, useEffect, useState } from "react";
import { Button, Avatar } from "@mui/material";
import { useUser } from "../../../../hooks/Authorize";

export default function ProfilePreview() {
  const platformUser = useUser();
  return (
    <div className="w-full flex gap-3 p-3 flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
        <Avatar
          alt="Steward Graham"
          sx={{ height: "7rem", width: "7rem" }}
          src="/static/images/avatar/1.jpg"
        />
        {platformUser?.firstName + " " + platformUser?.lastName}
        <h1>CEO</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-sm text-red-600">Not yet Clocked-in</h1>
        <span>11 : 32 : 12</span>
      </div>
      <div className="flex gap-3 flex-row justify-center items-center">
        <Button sx={{ px: "1.6rem", py: "0.2rem" }} variant="contained">
          Clock-in
        </Button>
        <Button
          sx={{ px: "1.6rem", py: "0.2rem" }}
          variant="contained"
          disabled
        >
          Clock-out
        </Button>
      </div>
    </div>
  );
}
