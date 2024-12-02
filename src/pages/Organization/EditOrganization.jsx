import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const EditOrganization = ({ onClose, onEdit, org }) => {
  const [formData, setFormData] = useState({
    name: org.name || "",
    email: org.email || "",
    website: org.website || "",
    logo: org.logo || "",
  });
  const [imagePreview, setImagePreview] = useState(org.logo || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
        setFormData({ ...formData, logo: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.website.trim()) {
      alert("All fields are required.");
      return;
    }

    onEdit({ ...org, ...formData });
    onClose();
  };

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
          borderRadius: "8px",
          maxWidth: "500px",
          width: "100%",
          mx: "auto",
          my: "10%",
          bgcolor: "background.paper",
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Edit Organization
        </Typography>

        <TextField
          label="Organization Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <div>
          <Typography>Organization Logo</Typography>
          <div className="image-input-wrapper">
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              style={{ display: "none" }}
              id="logo-upload"
            />
            <label htmlFor="logo-upload" style={{ cursor: "pointer" }}>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Selected"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              ) : (
                <AddOutlinedIcon />
              )}
            </label>
          </div>
        </div>

        <Box textAlign="right">
          <Button onClick={onClose} variant="outlined" sx={{ mx: 2 }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditOrganization;
