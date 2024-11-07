import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from "../../components/Image";
import Boardimg from "../../assets/offerLatter/pana.png";
import { height, styled, textAlign } from '@mui/system';
import NoticeIcon from '@mui/icons-material/StickyNote2'; // Placeholder for the notice image




const NoticeBoardContainer = styled(Box)({
  width: '300px',
  padding: '20px',
 
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#FFFFFF',
  textAlign: 'center',
});

const IconWrapper = styled(Box)({
  width: '80px',
  height: '80px',
  backgroundColor: '#2e2e2e',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '15px',
});

const Title = styled(Typography)({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

const Subtitle = styled(Typography)({
  fontSize: '14px',
  color: '#aaaaaa',
  marginBottom: '20px',
});

const AddButton = styled(Button)({
  backgroundColor: '#3a72f9',
  color: '#ffffff',
  padding: '8px 16px',
  borderRadius: '6px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#305ab2',
  },
});

const Norecentattendence = () => {
  return (
    <Box sx={{textAlign:"center"}}>
     
     
        <Image src={Boardimg} alt="Boarding" sx={{ml:"500px",height:"150px",alignItems:"center"}} />
      
      <Typography variant="h6" style={{ fontFamily:"sans-serif", marginBottom: '10px',marginLeft:"-22px",marginTop:"33px" }}>
      No Employee Recent Attendance Record!
      </Typography>
      <Subtitle sx={{fontFamily:"sans-serif",fontSize:"13px",textAlign:"center",marginLeft:"230px",width:"600px"}}>
      You do not currently have any employees to view their recent attendance.
      Click the button below now to add employees and start viewing their attendance records.
      </Subtitle>
      <AddButton sx={{marginLeft:"-33px",height:"33px",backgroundColor:"#3767B1",fontSize:"13px"}} variant="contained">Add Notice</AddButton>
    </Box>
  );
};

export default Norecentattendence;
