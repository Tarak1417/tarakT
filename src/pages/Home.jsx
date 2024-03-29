import React from 'react';
import {  Grid } from '@mui/material';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <div className="overflow-y-auto  min-h-screen md:h-screen absolute bg-black">
            <Grid container alignItems='center' justifyContent='center' height='100%'>
                <Grid item xs={11}>
                    <Dashboard />
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
