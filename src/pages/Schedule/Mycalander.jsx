import { Box } from "@mui/material";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import Themeentire from '../../style/theme';

const Mycalander = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    
      <Box
        sx={{
           // Dark background (customizable)
          padding: 2,
          borderRadius: '12px',
          
          backgroundColor:"background.default",
          width: '280px',  // Adjust width as needed
          fontFamily: 'Arial, sans-serif',
          '.react-calendar': {
             // Dark calendar background
             backgroundColor:"background.default",
            
            border: 'none',
            borderRadius: '12px',
          },
          '.react-calendar__tile': {
             // Transparent day tiles
            color:'gray',
            borderRadius: '50%',  // Circular day tiles
            padding: '10px',
          },
          '.react-calendar__tile--active': {
            // Active date background color
            color: 'white',
            borderRadius: '50%',
          },
          '.react-calendar__tile--now': {
            backgroundColor: '#3767B180',  // Styling for today's date
            color: 'white',
            borderRadius: '50%',
          },
          '.react-calendar__month-view__weekdays': {
            color: 'gray',  // Weekdays (Mon, Tue, etc.) color
          },
          '.react-calendar__navigation': {
            display: 'none',  // Hide navigation (month, year, arrows)
          },
        }}
      >
        <Calendar
        sx={{}}
          value={selectedDate}
          onChange={setSelectedDate}
          showNavigation={false}  // Disable the navigation (month and year)
        />
      </Box>
  
  );
};

export default Mycalander;
