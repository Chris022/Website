import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';



export default function RotateScreen() {

    return (
        <Dialog
            open={true}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle><center><Typography variant="h1" style={{"fontFamily":"MinSans"}}>Please Rotate Your Screen</Typography></center></DialogTitle>
            <div style={{"margin":"10px"}}>
                <Typography variant="h4" style={{"fontFamily":"MinSans"}}>For the website to properly work, please turn your phone into landscape mode :-)</Typography>
            </div>
        </Dialog>
    )

}