import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Chart } from "react-google-charts";

let Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

let NAME = "aboutMeModal"
export default function AboutMe({openModalTigger}) {

    let [open, setOpen] = React.useState(false)

    let handleClose = () => {
        setOpen(false)
    }

    React.useEffect(()=>{
        if(openModalTigger == NAME){
            setOpen(true)
        }
    },[openModalTigger])

    let data = [
        ["Task", "Hours per Day"],
        ["JS/React", 3],
        ["Java", 3],
        ["Python", 3],
        ["Haskell", 3]
    ];

    let options = {
        pieHole: 0.4,
        pieSliceText: "label",
        tooltip: { trigger: "none" },
        legend: false,
        is3D: false,
    };

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="lg"
        >
            <DialogTitle><center><Typography variant="h2" style={{ "fontFamily": "MinSans" }}>About Me</Typography></center></DialogTitle>
            <div style={{ "margin": "10px" }}>
                <Grid container>
                    <Grid item xs>
                        <Typography variant="h6" style={{ "fontFamily": "MinSans" }}>My Skills:</Typography>
                        <Chart
                            chartType="PieChart"
                            width="100%"
                            height="400px"
                            data={data}
                            options={options}
                        />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs>
                        <div style={{ "marginLeft": "2%" }}>
                            <Typography variant="h6" style={{ "fontFamily": "MinSans" }}>Introduction:</Typography>
                            <Typography variant="p" style={{ "fontFamily": "MinSans" }}>
                                Hi, my name is Christoph. I am 19 Years old and I am in my senior year at the HTL-Salzburg.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h6" style={{ "fontFamily": "MinSans" }}>Hobbies:</Typography>
                            <Typography variant="p" style={{ "fontFamily": "MinSans" }}>
                                Rock-Climbing🧗, Cycling🚴, Running🏃, Programming and pretty much everything else you can do on a computer💻
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h6" style={{ "fontFamily": "MinSans" }}>My Jobs:</Typography>
                            <Typography variant="p" style={{ "fontFamily": "MinSans" }}>
                                <ul>
                                    <li>3 x Internships at a small Software Company / Mainly Web-Programming, C#, Networking</li>
                                    <li>1 Year of work at the same Company (8 Hours a Week, when not at school)</li>
                                </ul>
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="p" style={{ "fontFamily": "MinSans" }}>
                                For more information about my Projects check out the “My Projects” port
                            </Typography>

                        </div>
                    </Grid>
                </Grid>

            </div>
            <div style={{ "margin": "10px" }}>
                <center>
                    <Button variant="outlined" onClick={handleClose}>
                        <Typography style={{ "fontFamily": "MinSans" }}>Back To Exploring!</Typography>
                    </Button>
                </center>
            </div>


        </Dialog>
    )

}
