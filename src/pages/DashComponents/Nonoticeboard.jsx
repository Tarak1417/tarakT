import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from "../../components/Image";
import Boardimg from "../../assets/offerLatter/Board.png";
import { height, styled } from '@mui/system';
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

const Nonoticeboard = () => {
  return (
    <NoticeBoardContainer>
     
     
        <Image src={Boardimg} alt="Boarding" sx={{ml:"-29px",height:"60px"}} />
      
      <Typography variant="h6" style={{ fontFamily:"sans-serif", marginBottom: '10px',marginLeft:"-22px",marginTop:"33px" }}>
        No Current Notice!
      </Typography>
      <Subtitle sx={{fontFamily:"sans-serif",fontSize:"13px",marginLeft:"-33px"}}>
        You do not have any current notice available. Click the button below to add new notice.
      </Subtitle>
      <AddButton sx={{marginLeft:"-33px",height:"33px",backgroundColor:"#3767B1",fontSize:"13px"}} variant="contained">Add Notice</AddButton>
    </NoticeBoardContainer>
  );
};

export default Nonoticeboard;
