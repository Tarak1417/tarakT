import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Paper, Grid, Avatar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Sample shift data
const shifts = [
  { name: 'Amanda Throne', role: 'Software Developer', type: 'Present', shift: { start: 0, end: 8 }, color: '#3767B1' },
  { name: 'Amina Kumar', role: 'QA Tester', type: 'Present', shift: { start: 2, end: 10 }, color: '#3767B1' },
  { name: 'Daniel Thompson', role: 'Frontend Developer', type: 'Absent', shift: { start: 0, end: 24 }, color: 'orange' },
  { name: 'Dave Maxwell', role: 'Frontend Developer', type: 'Present', shift: { start: 1, end: 9 }, color: '#3767B1' },
  { name: 'Dwayne Graham', role: 'Backend Developer', type: 'Present', shift: { start: 4, end: 8 }, color: '#3767B1' },
  { name: 'Rashid Ahmed', role: 'Backend Developer', type: 'Present', shift: { start: 9, end: 17 }, color: 'blue' },
  { name: 'Yogesh Singh', role: 'QA Tester', type: 'Holiday', shift: { start: 0, end: 24 }, color: 'green' },
];

const EmployeeShift = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('Daily');

  const handlePreviousDay = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() - 1)));
  };

  const handleNextDay = () => {
    setSelectedDate(new Date(selectedDate.setDate(selectedDate.getDate() + 1)));
  };

  // Generate an array of time slots (12AM to 11AM)
  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i % 12 || 12}${i < 12 ? 'AM' : 'PM'}`);

  return (
    <Box sx={{backgroundColor:'background.default'}} flex={1} p={3}>
      {/* Header Section */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
        <Stack direction="row" alignItems="center" spacing={1}>
         
          <Typography variant="h5">
            {selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
          <ArrowBackIosNewIcon onClick={handlePreviousDay} style={{ cursor: 'pointer' }} />
          <ArrowForwardIosIcon onClick={handleNextDay} style={{ cursor: 'pointer' }} />
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
      <Paper elevation={3}>
        <Grid sx={{backgroundColor:'background.default',height:'50vh'}} container>
          {/* Employee List */}
          <Grid item xs={3} p={2}>
            <Typography variant="h6" mb={2}>
              Employees
            </Typography>
            {shifts.map((shift) => (
              <Stack direction="row" alignItems="center" spacing={2} key={shift.name} mb={2}>
                <Avatar alt={shift.name} src={`https://i.pravatar.cc/150?u=${shift.name}`} />
                <Box>
                  <Typography>{shift.name}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {shift.role}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Grid>

          {/* Shift Time Schedule */}
          <Grid item xs={9} p={2} borderLeft="1px solid rgba(0, 0, 0, 0.1)">
            {/* Table Header with Time Slots */}
            <Grid container spacing={1} mb={2}>
              {timeSlots.map((time) => (
                <Grid item xs={1} key={time}>
                  <Typography variant="caption" align="center">
                    {time}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            {/* Shift Bars Aligned with Time Slots */}
            {shifts.map((shift) => (
              <Grid container spacing={1} key={shift.name} alignItems="center" mb={2}>
                {/* Empty grid cells before the shift starts */}
                {Array.from({ length: shift.shift.start }).map((_, i) => (
                  <Grid item xs={1} key={i} />
                ))}

                {/* Shift bar covering the shift duration */}
                <Grid item xs={shift.shift.end - shift.shift.start}>
                  <Box
                    bgcolor={shift.color}
                    color="white"
                    p={1}
                    borderRadius="5px"
                    textAlign="center"
                  >
                    {shift.type === 'Present' ? `${shift.shift.start}AM - ${shift.shift.end}AM` : shift.type}
                  </Box>
                </Grid>

                {/* Empty grid cells after the shift ends */}
                {Array.from({ length: 12 - shift.shift.end }).map((_, i) => (
                  <Grid item xs={1} key={i} />
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default EmployeeShift;
