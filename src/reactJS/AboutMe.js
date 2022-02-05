import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItemText';



export default function AboutMe() {

    let [open,setOpen] = React.useState(false)

    let handleClose = ()=>{
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle><center><Typography variant="h2" style={{"fontFamily":"MinSans"}}>About Me</Typography></center></DialogTitle>
            <div style={{"margin":"10px"}}>
                <List>
                    <ListItem>
                        <Typography style={{"fontFamily":"MinSans"}}>Name: Christoph</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography style={{"fontFamily":"MinSans"}}>Name: Christoph</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography style={{"fontFamily":"MinSans"}}>Name: Christoph</Typography>
                    </ListItem>
                </List>
                
            </div>
            <div style={{"margin":"10px"}}>
                <center>
                    <Button variant="outlined" onClick={handleClose}>
                        <Typography style={{"fontFamily":"MinSans"}}>Back To Exploring!</Typography>
                    </Button>
                </center>
            </div>
            

        </Dialog>
    )

}