import React from 'react';
import { Grid } from '@mui/material';
import JobListing from './jobListing';

const Home = () => {
    return (
        <div className="h-full overflow-hidden bg-black">
            <div className="h-full" style={{ overflowY: 'scroll', paddingRight: '1px' }}>
                <Grid container alignItems='center' justifyContent='center' height='100%'>
                    <Grid item xs={12}>
                        <JobListing />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;
