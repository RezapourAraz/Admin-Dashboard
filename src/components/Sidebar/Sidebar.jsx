import React from 'react';

// Mui Components
import { Box, Stack,Divider } from '@mui/material';
import Profile from '../Cards/Profile.Cards';

// const userData = [
//     {
//         userName: "Vahid Rezapour",
//         userRole: "Admin"
//     }
// ]

const Sidebar = ({userData}) => {
    return (
        
        <Stack sx={{
            backgroundColor:"primary.main",
            minHeight: "100vh",
            padding: ".5rem"
        }}>
            <Box p={2}>
                {userData.map((user , index)=> <Profile key={index} userData={user} />)}
            </Box>
            <Divider />
        </Stack>
    );
};

export default Sidebar;