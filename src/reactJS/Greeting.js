import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function Greeting() {

    let [open,setOpen] = React.useState(true)

    let handleClose = ()=>{
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle><center><Typography variant="h2" style={{"fontFamily":"MinSans"}}>Hi!</Typography></center></DialogTitle>
            <div style={{"margin":"10px"}}>
                <Typography style={{"fontFamily":"MinSans"}}>
                    I am Chris and this is my little World. Feel free to explore it.
                    Have Fun!
                </Typography>
                <Typography style={{"fontFamily":"MinSans"}}>
                    Use the arrow keys to steer and rotate the world using the left button
                    on your mouse. If you tent to get seesick, you can also  just use the drawer in the top right.
                </Typography>
            </div>
            <div style={{"margin":"10px"}}>
                <center>
                    <Button variant="outlined" onClick={handleClose}>
                        <Typography style={{"fontFamily":"MinSans"}}>Start Exploring!</Typography>
                    </Button>
                </center>
            </div>
            

        </Dialog>
    )

}