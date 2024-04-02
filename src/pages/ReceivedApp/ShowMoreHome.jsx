import React from 'react';
import { Grid } from '@mui/material';
import ShowMorePage from './ShowMore';


const ShowMoreHome = () => {
    return (
        <div className="h-full overflow-hidden bg-black">
            <div className="h-full" style={{ overflowY: 'scroll', paddingRight: '1px' }}>
                <Grid container alignItems='center' justifyContent='center' height='100%'>
                    <Grid item xs={12}>
                       <ShowMorePage/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ShowMoreHome;
