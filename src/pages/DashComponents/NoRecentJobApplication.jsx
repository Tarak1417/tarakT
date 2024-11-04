import React from 'react';
import { Box, Card, Typography, Button, Divider } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import Norecentjob from "../../assets/offerLatter/rafiki.png";
import SearchIcon from '@mui/icons-material/Search'; // Replace with your custom icon if needed

const NoRecentJobApplication = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      }}
    >
      <Box
        sx={{
          
          
          padding: '24px',
          textAlign: 'center',
         
          borderRadius: '12px',
          color: 'white',
        }}
      >
       

        {/* Icon/Image Section */}
        <Box sx={{ marginY: 4 }}>
          <Box
            component="img"
            src={Norecentjob} // Replace with your actual image path
            alt="No job applications"
            sx={{ width: 200, height: 150,marginLeft:"105px" }}
          />
        </Box>

        {/* Main Text */}
        <Typography variant="h6" sx={{  marginBottom: 1 ,fontFamily:"sans-serif",fontSize:"23px"}}>
          No Recent Job Application!
        </Typography>
        <Typography variant="body2" sx={{ color: grey[400], marginBottom: 4,fontSize:"13px" }}>
          You have no recent job applications yet. <br />
          Click on the button below to create jobs for people to apply.
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: blue[700],
            color: '#fff',
            textTransform: 'none',
            borderRadius: '8px',
            '&:hover': { backgroundColor: blue[800] },
          }}
        >
          Create Job
        </Button>
      </Box>
    </Box>
  );
};

export default NoRecentJobApplication;
