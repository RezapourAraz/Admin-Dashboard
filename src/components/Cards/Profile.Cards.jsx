import React from 'react';

// Mui Components
import { Grid, Stack, Typography } from '@mui/material';

// Mui Icons

const Profile = ({userData: {userName, userRole}}) => {
    return (
        <Stack >
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Typography variant='h6' component="h6" color="common.white">
                        {userName}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" component='span' color='grey.500' alignItems='center'>
                        {userRole}
                    </Typography>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Profile;