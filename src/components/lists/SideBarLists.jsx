import React from 'react';

// Mui Components
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// Mui Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableViewIcon from '@mui/icons-material/TableView';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBarLists = () => {
    return (
        <List component="nav" >
            <ListItemButton component="a" href="/dashboard">
                <ListItemIcon>
                    <DashboardIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
            <ListItemButton component="a" href="/">
                <ListItemIcon>
                    <TableViewIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Tables" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
            <ListItemButton component="a" href="/">
                <ListItemIcon>
                    <ListAltIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Billing" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
            <ListItemButton component="a" href="/">
                <ListItemIcon>
                    <NotificationsIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Notifications" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
            <ListItemButton component="a" href="/">
                <ListItemIcon>
                    <PersonIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Profile" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
            <ListItemButton component="a" href="/">
                <ListItemIcon>
                    <LogoutIcon sx={{color:"common.white"}} />
                </ListItemIcon>
                <ListItemText primary="Logout" primaryTypographyProps={{
                    color:'common.white'
                }} />
            </ListItemButton>
        </List>
    );
};

export default SideBarLists;