import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function Clock() {
    const [time, setTime] = useState();
    const [Dates, setDate] = useState();
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        const Date1 = setInterval(() => {
            setDate(new Date().toLocaleDateString());
        }, 1000);
    
        return () => {
            clearInterval(timer);
            clearInterval(Date1);
        };
    }, []);
    
   

    return (
        <Grid item sx={{ display: { xs: 'flex' },my:1  }} alignItems='center'>
        <Box sx={{ mr: 2 }}>
            <Button >{Dates}</Button>
        </Box>
        <Button  sx={{ display: { lg: 'block', xs: 'none' } }}>
            {time}
        </Button>
        {/* <Box sx={{ mx: 2 }}>
            <Button variant='contained'>Clock In</Button>
        </Box> */}

       
    </Grid>
    );
}
