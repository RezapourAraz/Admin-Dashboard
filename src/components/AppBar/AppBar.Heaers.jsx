import React, { useState } from 'react';

// Mui Components
import { AppBar, IconButton, Toolbar, Badge, Avatar, Grid, Menu, MenuItem } from '@mui/material';

// Mui Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';

const AppBarHeaers = ({userData}) => {

    const [ menu, setMenu ] = useState(null)
    const open = Boolean(menu);
    const { userName } = userData;

    const handelClickOpen = (event) => {
        setMenu(event.currentTarget);
    }
    const handleClickClose =() => {
        setMenu(null);
    }

    return (
        <AppBar position="static" color='common'>
            <Toolbar >
                <Grid container justifyContent="space-between">
                    <Grid item display='flex'>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton >
                            <Badge badgeContent={2} color="secondary" variant="dot">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton >
                            <Badge badgeContent={3} color="secondary" variant='dot'>
                                <MailIcon color='common.white' />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton 
                        id='account-btn'
                        onClick={handelClickOpen} 
                        aria-controls={menu ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={menu ? 'true' : undefined}
                        
                        >
                            <Avatar alt={userName}/>
                        </IconButton>
                        <Menu 
                        anchorEl={menu}
                        open={open} 
                        id='account-menu'
                        onClose={handleClickClose}
                        onClick={handleClickClose} 
                        MenuListProps={{
                            'aria-labelledby': 'account-btn',
                          }}
                        >
                            <MenuItem onClose={handleClickClose}>My Profile</MenuItem>
                            <MenuItem onClose={handleClickClose}>Notifications</MenuItem>
                            <MenuItem onClose={handleClickClose}>Settings</MenuItem>
                            <MenuItem onClose={handleClickClose}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarHeaers;