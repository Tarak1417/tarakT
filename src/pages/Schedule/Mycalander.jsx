import { Box } from "@mui/material";
import { Calendar } from "react-calendar"; // Assuming you're using 'react-calendar'
import 'react-calendar/dist/Calendar.css'; // Make sure this import is present
import { useState } from "react";
import Themeentire from '../../style/theme';

const Mycalander = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Themeentire>
    <Box container
      sx={{ backgroundColor:'background.main',
       
        
        p: 2, 
        borderRadius: 2 
      }}
    >
      <Calendar 
        value={selectedDate} 
        onChange={setSelectedDate} 
        className="custom-calendar"
      />
    </Box>
    </Themeentire>
  );
};

export default Mycalander;
