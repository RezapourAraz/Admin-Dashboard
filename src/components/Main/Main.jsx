import { Box } from '@mui/material';
import React from 'react';
import AppBarHeaers from '../AppBar/AppBar.Heaers';

const Main = ({userData}) => {
    return (
        <Box >
            <AppBarHeaers userData={userData} />
        </Box>
    );
};

export default Main;