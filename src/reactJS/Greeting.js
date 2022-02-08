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
            PaperProps={{
                style: {
                  //background: "linear-gradient( 45deg, #CA4246 16.666%,  #E16541 16.666%,  #E16541 33.333%,  #F18F43 33.333%, #F18F43 50%,  #8B9862 50%,  #8B9862 66.666%,  #476098 66.666%,  #476098 83.333%,  #A7489B 83.333%)",
                  background: "#0ac repeating-conic-gradient(hsla(33, 100%, 77%, 1) 0 15deg, hsla(33, 100%, 89%, 1) 0 30deg)",
                  boxShadow: 'none',
                },
              }}
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