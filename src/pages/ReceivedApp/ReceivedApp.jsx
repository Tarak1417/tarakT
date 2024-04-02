import React from 'react';
import { Grid } from '@mui/material';
import Applications from './Applications';

const ReceivedApp = () => {
    return (
        <div className="h-full overflow-hidden bg-black">
            <div className="h-full" style={{ overflowY: 'scroll', paddingRight: '1px' }}>
                <Grid container alignItems='center' justifyContent='start' height='100%'>
                    <Grid item xs={12}>
                        <Applications/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ReceivedApp;
