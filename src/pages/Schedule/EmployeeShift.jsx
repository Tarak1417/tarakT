import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Paper, Grid, Avatar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sectionwisereport from '../Schedule/reports/WeekReport';

// Sample shift data
const shifts = [
  { name: 'Amanda Throne', role: 'Software Developer', type: 'Present', shift: { start: 0, end: 8 }, color: '#3767B1' },
  { name: 'Amina Kumar', role: 'QA Tester', type: 'Present', shift: { start: 2, end: 10 }, color: '#3767B1' },
  { name: 'Daniel Thompson', role: 'Frontend Developer', type: 'Absent', shift: { start: 0, end: 24 }, color: 'orange' },
  { name: 'Dave Maxwell', role: 'Frontend Developer', type: 'Present', shift: { start: 1, end: 9 }, color: '#3767B1' },
  { name: 'Dwayne Graham', role: 'Backend Developer', type: 'Present', shift: { start: 4, end: 8 }, color: '#3767B1' },
  { name: 'Rashid Ahmed', role: 'Backend Developer', type: 'Present', shift: { start: 9, end: 17 }, color: '#3767B1' },
  { name: 'Yogesh Singh', role: 'QA Tester', type: 'Holiday', shift: { start: 0, end: 24 }, color: '#44B14F' },
];

const EmployeeShift = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('Daily');

  // Handlers for Previous and Next Navigation
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

  // Generate Time Slots (Daily View)
  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i % 12 || 12}${i < 12 ? 'AM' : 'PM'}`);

  // Render Content Based on View
  const renderShifts = () => {
    if (view === 'Daily') {
      return shifts.map((shift) => (
        <Grid container spacing={1} key={shift.name} alignItems="center" mb={2}>
          {Array.from({ length: shift.shift.start }).map((_, i) => (
            <Grid item xs={1} key={i} />
          ))}
          <Grid item xs={shift.shift.end - shift.shift.start}>
            <Box bgcolor={shift.color} color="white" p={1} borderRadius="5px" textAlign="center">
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
            <Typography variant="h6" align="center" mt={5}>
             
            </Typography>
            <Sectionwisereport />
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
    <Box sx={{width:'67vw',backgroundColor:'background.default',color:'gray' }} flex={1} p={3}>
      {/* Header Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Stack  direction="row" alignItems="center" spacing={1}>
          <Typography sx={{color:'gray'}} variant="h5">
            {view === 'Daily'
              ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              : view === 'Weekly'
              ? `Week of ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
              : selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </Typography>
          <ArrowBackIosNewIcon onClick={handlePrevious} style={{ cursor: 'pointer',color:'gray',fontSize:'14px' }} />

          <ArrowForwardIosIcon onClick={handleNext} style={{ cursor: 'pointer',color:'gray',fontSize:'14px'  }} />
        </Stack>

        {/* View Buttons */}
        <Stack direction="row" spacing={1}>
          <Button variant={view === 'Daily' ? 'contained' : 'outlined'} onClick={() => setView('Daily')}>
            Daily
          </Button>
          <Button variant={view === 'Weekly' ? 'contained' : 'outlined'} onClick={() => setView('Weekly')}>
            Weekly
          </Button>
          <Button variant={view === 'Monthly' ? 'contained' : 'outlined'} onClick={() => setView('Monthly')}>
            Monthly
          </Button>
        </Stack>
      </Stack>

      {/* Employee Shift Table */}
      <Box sx={{}} elevation={3}>
        <Grid sx={{  height: '66vh',width:"60vw" }} container>
          {/* Employee List */}
          <Grid sx={{}} item xs={3} p={2}>
            <Typography variant="h6" mb={2}>
              Employees
            </Typography>
            {shifts.map((shift) => (
              <Stack direction="row" alignItems="center" spacing={2} key={shift.name} mb={2}>
                <Avatar alt={shift.name} src={`https://i.pravatar.cc/150?u=${shift.name}`} sx={{height:'25px',width:'25px'}} />
                <Box>
                  <Typography sx={{fontSize:'14px'}}>{shift.name}</Typography>
                  <Typography sx={{fontSize:'12px',marginTop:'-22px'}} variant="caption" color="textSecondary">
                    {shift.role}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Grid>

          {/* Shift Schedule */}
          <Grid item xs={9} p={2} borderLeft="1px solid rgba(0, 0, 0, 0.1)">
            {view === 'Daily' && (
              <Grid container spacing={1} mb={2}>
                {timeSlots.map((time) => (
                  <Grid item xs={1} key={time}>
                    <Typography variant="caption" align="center">
                      {time}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            )}
            {renderShifts()}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EmployeeShift;
