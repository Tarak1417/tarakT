import React, { useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabContext,
  TabPanel,
  Card,
  CardContent,
  Typography,
  Button,
  Input,
  TextField,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Tabs Section
const CreateOrganization = () => {
  const [organizationName, setOrganizationName] = useState(""); // Start with the second tab active
  const [email, setEmail] = useState(""); // Start with the second tab active
  const [website, setWebsite] = useState(""); // Start with the second tab active
  const [picture, setPicture] = useState('');
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState({
    show: true,
    message: "",
    severity: "",
  });

  const handleOrganizationChange = (event) => {
    setOrganizationName(event.target.value);
  };

  const handelSubmit = async () => {
    // localStorage.setItem("tempOrganization" ,organizationName )
    // setShowMessage({
    //   show: true,
    //   message: "organization Created Successfully",
    //   severity: "success",
    // });
    // setTimeout(()=>{
    //   navigate("/listOrganization");
    // },[2500])
    let subscriptionId = localStorage.getItem("subscriptionId");

    if (subscriptionId) {
      try {

        const formData = new FormData();
        formData.append('photo', picture); // Ensure 'photo' matches backend field name
        formData.append('name', organizationName); // Ensure 'resume' matches backend field name
        formData.append('subscription', subscriptionId);
        formData.append('email', email);
        formData.append('website', website);
        const response = await axios.post(`/hr/organization`,  formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }});

        let data = response.data;

        if(data.success){
          setShowMessage({
            show: true,
            message: "organization Created Successfully",
            severity: "success",
          });
          setTimeout(()=>{
            navigate("/listOrganization");
          },[2500])
          
        }
      } catch (e) {
        console.log("organization method created:", e);
        setShowMessage({
          show: true,
          message:  e.response.data.error ,
          severity: "error",
        });
      }
    } else {
      navigate("/checkout");
    }
  };

  const handlePhotoChange = (e) => {
    const { files } = e.target;
    if (!files || files.length === 0) {
        // toast.error('No file selected');
        setShowMessage({
          show: true,
          message:'No file selected' ,
          severity: "error",
        });
        return;
    }

    const file = files[0];
    const isValidExtension = ['PNG', 'JPEG', 'JPG', 'AVIF', 'WEBP'].some(ext =>
        new RegExp(`(${ext})$`, 'i').test(file.name)
    );

    if (!isValidExtension) {
      setShowMessage({
        show: true,
        message:'Please provide a valid photo file format (PNG, JPEG, JPG, AVIF, WEBP).' ,
        severity: "error",
      });
        // toast.warn('Please provide a valid photo file format (PNG, JPEG, JPG, AVIF, WEBP).');
        return;
    }
    setShowMessage({
      show: true,
      message:"Photo update successfully" ,
      severity: "success",
    });
    // toast.success("Photo update successfully");
    setPicture(file);
};


  const handleClose = (event) => {
    setShowMessage({ show: false, message: " ", severity: "" });
  };

  const isFormValidate  =  organizationName =='' || email =='' || website ==''|| picture ==''

  return (
    <Box
      sx={{
        backgroundColor: "background.main",
        p: { xs: 3, sm: 10 },
        width: "100vw",
        height: "100vh",
      }}
    >
      <Snackbar
        open={showMessage.show}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          severity={showMessage.severity}
          variant="filled"
          sx={{ width: "100%" }}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <AlertTitle> {showMessage.severity}</AlertTitle>
          {showMessage.message}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: { xs: "2.7rem", sm: ".7rem" },
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Typography sx={{ fontSize: { xs: "1.6rem", sm: "2.5rem" } }}>
          Create an Organization to track the status of your employees
        </Typography>

        <Typography
          sx={{
            marginTop: ".7rem",
            paddingX: { xs: 2, sm: 0 },
            marginRight: { xs: 0, sm: 36 },
            fontSize: { xs: "0.7rem", sm: "1rem" },
          }}
        >
          HR organization refers to the style of coordination, communication and
          management, a team or an employee uses through out his/her contract
          with the organization.
        </Typography>
        <div className="flex justify-center py-12">
          <img
            className="origin-center"
            style={{ width: 250 }}
            src="/images/ASSETS/walkover4.png"
            alt="walkover1"
          />
        </div>

        <TextField
          name="question"
          size="small"
          value={organizationName}
          variant="outlined"
          onChange={handleOrganizationChange}
          placeholder=" Organization Name"
          fullWidth
        />

        <TextField
          name="question"
          size="small"
          value={email}
          variant="outlined"
          onChange={(e)=> setEmail(e.target.value)}
          placeholder=" Organization  Email"
          fullWidth
        />
        <TextField
          name="question"
          size="small"
          value={website}
          variant="outlined"
          onChange={(e)=>setWebsite(e.target.value)}
          placeholder=" Organization Website"
          fullWidth
        />

        <div className="mb-4 flex flex-row">
          <h4 className="mb-2 mr font-semibold dark:text-white">
            Organization Logo
          </h4>
          <input
            type="file"
            className="rounded px-6 py-3 mr-2"
            accept="*"
            required
            onChange={handlePhotoChange}
          />
        </div>
        <div className="flex justify-end pb-5">
          <Button
            className=" ml-auto"
            variant="contained"
            disabled={isFormValidate}
            onClick={handelSubmit}
            sx={{ px: 5, py: 1 }}
          >
            Create
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default CreateOrganization;
