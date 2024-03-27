import { Box, Grid } from '@mui/material';
import React from 'react';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <Box p={2}>
            <Grid container alignItems='center' width='100%'>
                <Grid item xs>
                    <Dashboard/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
