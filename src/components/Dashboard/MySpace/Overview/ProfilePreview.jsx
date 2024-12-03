import React, { useState } from "react";
import { Button, Typography, IconButton, Box } from "@mui/material";
import { useUser } from "../../../../hooks/Authorize";
import camera from "../../../../assets/Interductionimages/camera.png";

export default function ProfilePreview() {
  const platformUser = useUser();
  const [image, setImage] = useState(platformUser?.image || "");

  // Function to get the initials or "?"
  const getInitials = () => {
    if (platformUser?.firstName && platformUser?.lastName) {
      return `${platformUser.firstName.charAt(0).toUpperCase()}${platformUser.lastName.charAt(0).toUpperCase()}`;
    }
    return "?";
  };

  // Function to handle image selection and upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="w-full flex gap-3 p-3 flex-col justify-center items-center">
      {/* Profile Picture Section */}
      <div className="flex flex-col justify-center items-center">
        <Box
          sx={{
            position: "relative",
            width: image ? "150px" : "200px",
            height: image ? "170px" : "200px",
            borderRadius: image ? "10px" : "50%",
            overflow: "hidden",
            border: image ? "" : "2px solid blue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: image ? "transparent" : "background.view",
            "&:hover .camera-icon": {
              opacity: 1,
            },
          }}
        >
          {/* Profile Image or Fallback */}
          {image ? (
            <img
              src={image}
              alt="User"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", // Ensures the image covers the container
                objectPosition: "center", // Centers the image
              }}
            />
          ) : (
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: 36,
              }}
            >
              {getInitials()}
            </Typography>
          )}

          {/* Camera Icon */}
          <IconButton
            className="camera-icon"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the icon
              backgroundColor: "transparent",
              boxShadow: "none",
              opacity: 0, // Hidden by default
              transition: "opacity 0.3s ease", // Smooth transition
            }}
            size="small"
            component="label"
          >
            <img
              src={camera}
              alt="Camera"
              style={{
                width: "20px",
                height: "20px",
              }}
            />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </IconButton>
        </Box>

        {/* User Info */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          {platformUser?.firstName + " " + platformUser?.lastName || "N/A"}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          CEO
        </Typography>
      </div>

      {/* Clock-in/Clock-out Status */}
      <div className="flex flex-col justify-center items-center">
        <Typography variant="body2" color="error">
          Not yet Clocked-in
        </Typography>
        <Typography variant="h6">11 : 32 : 12</Typography>
      </div>

      {/* Clock-in/Clock-out Buttons */}
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
