import React from 'react';

// Components
import AppBarHeaers from '../AppBar/AppBar.Heaers';

// Miu Components
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../Pages/Dashboard.Page';

const Main = ({userData}) => {
    return (
        <>
        <Box >
            <AppBarHeaers userData={userData} />
        </Box>
        <Box>
            <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
            </Routes>
        </Box>
        </>
    );
};

export default Main;