import { AppBar, Box, Toolbar, Typography, styled, Badge, Avatar } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { InputBase } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';


    const StyledToolbar = styled(Toolbar)({

        display: "flex",
        justifyContent: "space-between",

    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "20%",
    }))

    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        alignItems: "center",
        gap: "30px",
        [theme.breakpoints.up("sm")] : {
            display: "flex",
        }
    }))

    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        [theme.breakpoints.up("sm")] : {
            display: "none",
        }
    }))


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" }}}>Phasebook</Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" }}} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}} src="./images/team-1.jpg" onClick={(e) => setOpen(true)} />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{width: 30, height: 30}} src="./images/team-1.jpg" />
                    <Typography variant="span">Jawad Taj</Typography>
                </UserBox>
            </StyledToolbar> 
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )

}

export default Navbar;