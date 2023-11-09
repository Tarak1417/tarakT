import { Box, Grid, IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import React from 'react';

const Home = () => {
    return (
        <Box p={2}>
            <Grid container alignItems='center' width='100%'>
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
                        Home
                    </Typography>
                </Grid>

                <Grid item>
                    <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
