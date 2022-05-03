import React from 'react';

// Mui Components
import { Box, Stack,Divider } from '@mui/material';
import Profile from '../Cards/Profile.Cards';
import SideBarLists from '../lists/SideBarLists';



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
            <Box p={1}>
                <SideBarLists />
            </Box>
        </Stack>
    );
};

export default Sidebar;