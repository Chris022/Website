import React, { useEffect } from 'react'

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


let NAME = "socialsModal"
export default function Socials({openModalTigger}) {

    let [open, setOpen] = React.useState(false)
    
    let input = React.useRef()

    let handleClose = () => {
        setOpen(false)
    }

    useEffect(()=>{
        if(openModalTigger == NAME){
            setOpen(true)
        }
    },[openModalTigger])


    return (
        <>
        <input id="socialsDialog" type="hidden" value={false} ref={input}/>
        <Dialog
            open={open}
            fullWidth
            maxWidth="xs"
            keepMounted 
        >
            <DialogTitle><center><Typography variant="h2" style={{ "fontFamily": "MinSans" }}>Contact</Typography></center></DialogTitle>
            <div style={{ "margin": "10px" }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Christoph" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TwitterIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Twitter - Not Available" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>window.open('https://github.com/Chris022','_self')}>
                            <ListItemIcon>
                                <GitHubIcon/>
                            </ListItemIcon>
                            <ListItemText primary="GitHub" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={()=>window.location.href = "mailto:christoph02.cw@gmail.com"}>
                            <ListItemIcon>
                                <EmailIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </div>
            <div style={{ "margin": "10px" }}>
                <center>
                    <Button variant="outlined" onClick={handleClose}>
                        <Typography style={{ "fontFamily": "MinSans" }}>Back To Exploring!</Typography>
                    </Button>
                </center>
            </div>


        </Dialog>
        </>
    )

}