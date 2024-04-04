import React from 'react';
import { Grid } from '@mui/material';
import DeptPage from './DeptPage';

const DeptHome = () => {
    return (
        <div className="h-full overflow-hidden bg-black">
            <div className="h-full" style={{ overflowY: 'auto', paddingRight: '1px' }}>
                <Grid container alignItems='center' justifyContent='center' height='100%'>
                    <Grid item xs={12}>
                        <DeptPage />
                    </Grid>
                </Grid>
            </div>
            <style jsx>{`
                
                .h-full::-webkit-scrollbar {
                    display: none;
                }

               
                .h-full {
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default DeptHome;
