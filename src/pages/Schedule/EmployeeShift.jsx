import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Paper, Grid, Avatar, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sectionwisereport from '../Schedule/reports/WeekReport';

import hrimage2 from '../../assets/Interductionimages/Vector-2.png';
import hrimage3 from '../../assets/Interductionimages/Vector-3.png';
import hrimage4 from '../../assets/Interductionimages/Vector.png';
const roleCounts = {
  'Software-Engineer': 1,
  'QA-Tester': 2,
  'Frontend-Developer': 2,
  'Backend-Developer': 2,
  'UI/UX-Designer': 1,
};

// Sample shift data
const shifts = [
  { name: 'Amanda Throne', role: 'Software-Engineer', type: 'Present', shift: { start: 0, end: 8 }, color: '#3767B1' , },
  { name: 'Amina Kumar', role: 'QA Tester', type: 'Present', shift: { start: 2, end: 10 }, color: '#3767B1' },
  { name: 'Daniel Thompson', role: 'Frontend Developer', type: 'Absent', shift: { start: 0, end: 24 }, color: 'orange' },
  { name: 'Dave Maxwell', role: 'Frontend Developer', type: 'Present', shift: { start: 1, end: 9 }, color: '#3767B1' },
  { name: 'Dwayne Graham', role: 'Backend Developer', type: 'Present', shift: { start: 4, end: 8 }, color: '#3767B1' },
  { name: 'Rashid Ahmed', role: 'Backend Developer', type: 'Present', shift: { start: 9, end: 17 }, color: '#3767B1' },
  { name: 'Yogesh Singh', role: 'UI/UX Designer', type: 'Holiday', shift: { start: 0, end: 24 }, color: '#8A2BE2' },
];

const shiftStatusColors = {
  Present: '#3767B1',
  Absent: 'orange',
  Leave: 'green',
  Holiday: '#8A2BE2',
};

const EmployeeShift = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('Daily');
  const [shift, setShift] = useState('AM Shift');

  const isMobile = useMediaQuery('(max-width:600px)');

  const handlePrevious = () => {
    if (view === 'Daily') setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
    if (view === 'Weekly') setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 7)));
    if (view === 'Monthly') setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)));
  };

  const handleNext = () => {
    if (view === 'Daily') setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
    if (view === 'Weekly') setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 7)));
    if (view === 'Monthly') setSelectedDate(new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)));
  };

  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i % 12 || 12}${i < 12 ? 'AM' : 'PM'}`);

  const renderShifts = () => {
    if (view === 'Daily') {
      return shifts.map((shift) => (
        <Grid container spacing={1} key={shift.name} alignItems="center" mb={2}>
          {Array.from({ length: shift.shift.start }).map((_, i) => (
            <Grid item xs={1} key={i} />
          ))}
          <Grid item xs={shift.shift.end - shift.shift.start}>
            <Box
              bgcolor={shift.color}
              color="white"
              p={1}
              borderRadius="5px"
              height="26px"
              textAlign="center"
              marginTop="-8px"
              padding="5px"
              sx={{ fontSize: isMobile ? '10px' : '14px' }}
            >
              {shift.type === 'Present' ? `${shift.shift.start}AM - ${shift.shift.end}AM` : shift.type}
            </Box>
          </Grid>
          {Array.from({ length: 12 - shift.shift.end }).map((_, i) => (
            <Grid item xs={1} key={i} />
          ))}
        </Grid>
      ));
    }

    if (view === 'Weekly') {
      return (
        <Grid container>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      );
    }

    if (view === 'Monthly') {
      return (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" mt={5}>
              Monthly Report Coming Soon...
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Box sx={{ borderRadius: '9px', height: 'auto', backgroundColor: 'background.default',marginTop:"-10px"}} p={isMobile ? 1 : 3}>
        {isMobile?(<div> <div className="flex flex-row  justify-between w-full p-3 mt-[-15px] mb-3 mt-2">
        <h6 className=" text-bold md:text-left md:mb-0">Overview Calendar</h6>
        <div className="flex gap-3 md:gap-4 items-center">
         <img src={hrimage2} alt="Vector 2" className="w-4 h-4 text-gray-500" />
          <img src={hrimage4} alt="Vector 4" className="w-4 h-4 text-gray-500" />
          {isMobile && ( <img src={hrimage3} alt="Vector 4" className="w-4 h-4 text-gray-500" />)}
         
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full mb-2'>
      <Stack direction="row" alignItems="center" spacing={1} mb="20px">
      <Box
         sx={{
          bgcolor: 'transparent', // Background color
          color: 'white',
          border: "1px solid grey", // Border with 1px solid grey
          borderRadius: '4px', // Adjusted to add rounded corners if needed
          width: 30,
          height: 30,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '12px',
          mr: 1,
        }}
        >
          {selectedDate.getDate()} {/* Displays the day of the month */}
        </Box>
          <Typography variant="h6" sx={{ fontSize: isMobile ? '10px' : '12px', fontWeight: 'bold' }}>
            {view === 'Daily'
              ? selectedDate.toLocaleDateString('en-US', { month: 'long' })
              : view === 'Weekly'
              ? `Week of ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
              : selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </Typography>

          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '4px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
              height: '25px',
              marginTop:'-20px' 
            }}
          >
            {/* <Typography variant="button" sx={{ fontSize: '10px', fontWeight: '100' ,}}>
              Today
            </Typography> */}
          {/*</Box> */}

          {/* <ArrowBackIosNewIcon onClick={handlePrevious} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px',marginTop:'-20px'  }} />
          <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px',marginTop:'-20px'  }} /> */}
        </Stack>
        {isMobile && (
  <Stack direction="row" alignItems="flex-end" justifyContent="between" spacing={1} sx={{ display: { xs: 'flex', sm: 'none' } }}>
    <Button
      sx={{ fontSize: '10px' ,height:"30px" ,width:"auto" }}
      variant={shift === 'AM Shift' ? 'contained' : 'outlined'}
      onClick={() => setShift('AM Shift')}
    >
      AM Shift
    </Button>
    <Button
      sx={{ fontSize: '10px',height:"30px" ,width:"auto"  }}
      variant={shift === 'PM Shift' ? 'contained' : 'outlined'}
      onClick={() => setShift('PM Shift')}
    >
      PM Shift
    </Button>
  </Stack>
)}
        </div>
        <div className="flex" >
        <Box display="flex" alignItems="center" marginBottom="10px">
        {/* Date in blue box */}
        <Typography
          sx={{
            color: 'gray',
            fontSize: '12px',
            fontWeight: 'bold',
            marginRight:"20px",
          }}
        >
          {selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}
        </Typography>
        <Box
          sx={{
            bgcolor: '#3767B1', // Blue background
            color: 'white',
            borderRadius: "10px",
            width: 30,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            mr: 1,
          }}
        >
          {selectedDate.getDate()} {/* Displays the day of the month */}
        </Box>
  
        {/* Day in gray */}
        
      </Box>
      <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
    {Object.entries(roleCounts).map(([role, count]) => (
      <Box key={role} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#3767B1',
            color: 'white',
            borderRadius: '50%',
            width: 10,
            height: 10,
            fontSize: '8px',
            mr: 1,
          }}
        >
          {count}
        </Box>
        <Typography sx={{ fontSize: '10px', text:"wrap"}}>{role}</Typography>
      </Box>
    ))}
  </Box>
      
      </div>
        
      </div>
      
    ):     <Stack
    direction={isMobile ? 'column' : 'row'}
    justifyContent="space-between"
    alignItems="center"
    mb={3}
  >
    <Typography sx={{ fontSize: isMobile ? '15px' : '18px', marginTop: '-30px' }}>Overview Calendar</Typography>
  
    {/* Date Display */}
    <Stack direction="row" alignItems="center" spacing={2}>
      {/* Date and Day */}
      <Box display="flex" alignItems="center">
        {/* Date in blue box */}
        <Box
          sx={{
            bgcolor: '#3767B1', // Blue background
            color: 'white',
            borderRadius: "10px",
            width: 30,
            height: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            mr: 1,
          }}
        >
          {selectedDate.getDate()} {/* Displays the day of the month */}
        </Box>
  
        {/* Day in gray */}
        <Typography
          sx={{
            color: 'gray',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
        </Typography>
      </Box>
  
      {/* Date range or view type */}
      <Typography variant="h6" sx={{ fontSize: isMobile ? '10px' : '12px', fontWeight: 'bold' }}>
        {view === 'Daily'
          ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
          : view === 'Weekly'
          ? `Week of ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
          : selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
      </Typography>
  
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          padding: '4px 12px',
          borderRadius: '8px',
          cursor: 'pointer',
          height: '25px',
          marginTop: '-20px',
        }}
      >
        <Typography variant="button" sx={{ fontSize: '10px', fontWeight: '100' }}>
          Today
        </Typography>
      </Box>
  
      <ArrowBackIosNewIcon onClick={handlePrevious} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px', marginTop: '-20px' }} />
      <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px', marginTop: '-20px' }} />
    </Stack>
  
    {/* View Selection Buttons */}
    <Stack direction="row" spacing={1} mt={isMobile ? 2 : 2}>
      <Button sx={{ fontSize: '10px' }} variant={view === 'Daily' ? 'contained' : ''} onClick={() => setView('Daily')}>
        Daily
      </Button>
      <Button sx={{ fontSize: '10px' }} variant={view === 'Weekly' ? 'contained' : ''} onClick={() => setView('Weekly')}>
        Weekly
      </Button>
      <Button sx={{ fontSize: '10px' }} variant={view === 'Monthly' ? 'contained' : ''} onClick={() => setView('Monthly')}>
        Monthly
      </Button>
    </Stack>
  </Stack>
  }

   {/*above code is  written in bith mobile and desktop mode*/}

      <Stack
  direction="row"
  spacing={2}
  justifyContent="flex-start"
  mb={1.5}
  mt={-2}
  sx={{ display: { xs: 'none', sm: 'flex' } }} // Hide on mobile
>
  <Button sx={{ fontSize: '10px' }} variant={shift === 'AM Shift' ? 'contained' : 'outlined'} onClick={() => setShift('AM Shift')}>
    AM Shift
  </Button>
  <Button sx={{ fontSize: '10px' }} variant={shift === 'PM Shift' ? 'contained' : 'outlined'} onClick={() => setShift('PM Shift')}>
    PM Shift
  </Button>

  {/* Role Indicators */}
  <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
    {Object.entries(roleCounts).map(([role, count]) => (
      <Box key={role} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: '#3767B1',
            color: 'white',
            borderRadius: '50%',
            width: 16,
            height: 16,
            fontSize: '10px',
            mr: 1,
          }}
        >
          {count}
        </Box>
        <Typography sx={{ fontSize: '10px' }}>{role}</Typography>
      </Box>
    ))}
  </Box>
</Stack>

      <Box >
      <Grid
  container
  sx={{
    height: '70%',
    
  }}
>
  {/* Employee List Section */}
  <Grid item xs={12} sm={3} p={2}>
    <Typography sx={{ fontSize: { xs: '13px', sm: '15px' }, marginTop: '-20px' }} variant="h6" mb={2}>
      Employees
    </Typography>
    {shifts.map((shift) => (
      <Stack direction="row" alignItems="center" spacing={1} key={shift.name} mb={-0.8}>
        <Avatar alt={shift.name} src={`https://i.pravatar.cc/150?u=${shift.name}`} sx={{ height: { xs: '18px', sm: '20px' }, width: { xs: '18px', sm: '20px' } }} />
        <Box>
          <Typography sx={{ fontSize: { xs: '11px', sm: '12px' }, mb: '-5px', mt: '2px' }}>{shift.name}</Typography>
          <Typography variant="caption" color="textSecondary" sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
            {shift.role}
          </Typography>
        </Box>
      </Stack>
    ))}
  </Grid>

  {/* Shift Timing Section */}
  <Grid item xs={12} sm={9} p={2}>
    {view === 'Daily' && (
      <Grid container spacing={0.5} mb={2} mt={-3.5}>
        {timeSlots.map((time) => (
          <Grid item xs={1} key={time}>
            <Typography variant="caption" align="center" sx={{ fontSize: { xs: '9px', sm: '10px' } }}>
              {time}
            </Typography>
          </Grid>
        ))}
      </Grid>
    )}
    {renderShifts()}
  </Grid>
</Grid>


       
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'-25px' ,}}>
          {Object.entries(shiftStatusColors).map(([status, color]) => (
            <Box key={status} sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <Box
                sx={{
                  backgroundColor: color,
                  borderRadius: '50%',
                  width: 10,
                  height: 10,
                  mr: 1,
                }}
              />
              <Typography variant="caption">{status}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeShift;
