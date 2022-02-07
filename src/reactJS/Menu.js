import React, { useRef, useEffect } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';


export default function Menu({setOpenModal}) {

    let [drawerOpen, setDrawerOpen] = React.useState(false)


    return (
        <>
            <Drawer
                anchor={"left"}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <Box
                    onClick={() => setDrawerOpen(false)}
                    onKeyDown={() => setDrawerOpen(false)}
                    sx={{ width: 200 }}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MenuIcon />
                                </ListItemIcon>
                                <ListItemText primary="Menu" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setOpenModal("aboutMeModal")}>
                                <ListItemIcon>
                                    <AccountCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="About Me" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setOpenModal("socialsModal")}>
                                <ListItemIcon>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText primary="Socials" />
                            </ListItemButton>
                        </ListItem>
                    </List>

                </Box>

            </Drawer>
            <Button style={{ "position": "absolute", "zIndex": 3 }} onClick={() => setDrawerOpen(true)}><MenuIcon sx={{ fontSize: 80 }} /></Button>
        </>
    )
}