import React from 'react';
import { Grid } from '@mui/material';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <div className="h-full overflow-hidden light:bg-black">
            <div className="h-full" style={{ overflowY: 'scroll', paddingRight: '17px' }}>
                <Grid container alignItems='center' justifyContent='center' height='100%'>
                    <Grid item xs={11}>
                        <Dashboard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;
