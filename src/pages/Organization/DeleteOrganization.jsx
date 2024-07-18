// DeleteOrganization.js
import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

const DeleteOrganization = ({ onClose, onDelete, org }) => {
  const [inputValue, setInputValue] = useState("");

  const handleDelete = () => {
    // let inputValueLower = String(inputValue).toLocaleLowerCase();
    // let orgNameLower = String(org.name).toLocaleLowerCase();
    if (inputValue === org.name) {
      onDelete(org);
      onClose();
    } else {
      alert("Organization  name does not match. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        borderRadius: "8px",
        maxWidth: "1300px",
        mx: 2,
        overflowX: "hidden",
        maxHeight: "85vh",
        overflowY: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" component="h2">
        Delete {org.name}
      </Typography>
      <Typography variant="body1">
        Are you sure you want to delete the organization  <span className="text-blue-500 font-bold"  > {org.name}  </span> ?
        
        
      </Typography>
      <Typography variant="body2" sx={{color : "red"}}>
         This action cannot be undone.
      </Typography>
      <Typography   variant="body2">
        Please type the organization name to confirm:
      </Typography>
      <TextField
        
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Box textAlign="right">
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            mx: 2,
          }}
        >
          Close
        </Button>

        <Button onClick={handleDelete} variant="contained">
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteOrganization;
