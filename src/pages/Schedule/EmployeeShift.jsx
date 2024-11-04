import React, { useState } from 'react';
import { Box, Stack, Typography, Button, Paper, Grid, Avatar, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Sectionwisereport from '../Schedule/reports/WeekReport';

const roleCounts = {
  'Software Engineer': 1,
  'QA Tester': 2,
  'Frontend Developer': 2,
  'Backend Developer': 2,
  'UI/UX Designer': 1,
};

// Sample shift data
const shifts = [
  { name: 'Amanda Throne', role: 'Software Engineer', type: 'Present', shift: { start: 0, end: 8 }, color: '#3767B1' },
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
              textAlign="center"
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
    <Box sx={{ borderRadius: '9px', height: '57%', backgroundColor: 'background.default' }} p={isMobile ? 1 : 3}>
      <Stack direction={isMobile ? 'column' : 'row'} justifyContent="space-between" alignItems="center" mb={3}>
        <Typography sx={{ fontSize: isMobile ? '18px' : '20px' }}>Overview Calendar</Typography>

        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{ fontSize: isMobile ? '16px' : '13px', fontWeight: 'bold' }}>
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
            }}
          >
            <Typography variant="button" sx={{ fontSize: '10px', fontWeight: '100' }}>
              Today
            </Typography>
          </Box>

          <ArrowBackIosNewIcon onClick={handlePrevious} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px' }} />
          <ArrowForwardIosIcon onClick={handleNext} sx={{ cursor: 'pointer', color: 'gray', fontSize: '13px' }} />
        </Stack>

        <Stack direction="row" spacing={1} mt={isMobile ? 2 : 0}>
          <Button sx={{fontSize:'12px'}} variant={view === 'Daily' ? 'contained' : ''} onClick={() => setView('Daily')}>
            Daily
          </Button>
          <Button sx={{fontSize:'12px'}}  variant={view === 'Weekly' ? 'contained' : ''} onClick={() => setView('Weekly')}>
            Weekly
          </Button>
          <Button sx={{fontSize:'12px'}}  variant={view === 'Monthly' ? 'contained' : ''} onClick={() => setView('Monthly')}>
            Monthly
          </Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="flex-start" mb={3}>
        <Button sx={{fontSize:'12px'}} variant={shift === 'AM Shift' ? 'contained' : 'outlined'} onClick={() => setShift('AM Shift')}>
          AM Shift
        </Button>
        <Button sx={{fontSize:'12px'}} variant={shift === 'PM Shift' ? 'contained' : 'outlined'} onClick={() => setShift('PM Shift')}>
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
                  fontSize: "10px",
                  mr: 1,
                }}
              >
                {count}
              </Box>
              <Typography sx={{ fontSize: '12px',  }}>{role}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>

      <Box sx={{ overflow: 'auto', height: '66vh' }}>
        <Grid
          container
          sx={{
            height: '55%',
            overflow: 'scroll',
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          <Grid item xs={12} sm={3} p={2}>
            <Typography sx={{ fontSize: '14px' }} variant="h6" mb={2}>
              Employees
            </Typography>
            {shifts.map((shift) => (
              <Stack direction="row" alignItems="center" spacing={2} key={shift.name} mb={2}>
                <Avatar alt={shift.name} src={`https://i.pravatar.cc/150?u=${shift.name}`} sx={{ height: '25px', width: '25px' }} />
                <Box>
                  <Typography sx={{ fontSize: '14px' }}>{shift.name}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {shift.role}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Grid>

          <Grid item xs={12} sm={9} p={2}>
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

        {/* Shift Status Indicators */}
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2,marginTop:'-12px' ,}}>
          {Object.entries(shiftStatusColors).map(([status, color]) => (
            <Box key={status} sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
              <Box
                sx={{
                  backgroundColor: color,
                  borderRadius: '50%',
                  width: 12,
                  height: 12,
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
