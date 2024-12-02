import React from "react";
import { Button, Avatar, Typography, IconButton } from "@mui/material";
import { useUser } from "../../../../hooks/Authorize";
import { Height } from "@mui/icons-material";


export default function ProfilePreview() {
  const platformUser = useUser();
  return (
    <div className="w-full flex gap-3 p-3 flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center">
      <div
    style={{
        display: "flex", // Enables flexbox
        alignItems: "center", // Vertically centers the content
        justifyContent: "center", // Horizontally centers the content
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "blue",
        width: "200px",
        height: "200px",
        borderRadius: "50%", // Creates a perfect circle
    }}
>
    <Typography
        variant="subtitle1"
        component="div"
        fontWeight={600}
        sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        }}
    >
        {platformUser && platformUser.firstName && platformUser.lastName
            ? `${platformUser.firstName.charAt(0).toUpperCase()}${platformUser.lastName.charAt(0).toUpperCase()}`
            : "?"}
    </Typography>
</div>



        <h1>{platformUser.lastName}</h1>
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
