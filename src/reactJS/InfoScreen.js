import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function InfoScreen({  country, range,openModalFunc }) {
    return (
        <>
            <div style={{ "width": "100%", "textAlign": "right", "position": "absolute", "zIndex": 2 }}>
                <Typography variant="h2" style={{ "margin": "1%", "color": "white", "fontFamily": "MinSans" }}>{country}</Typography>
            </div>
            {range &&
                <div style={{ "width": "100%", "textAlign": "center", "position": "absolute", "zIndex": 2, "bottom": "50%" }}>
                    <Button onClick={()=>openModalFunc()} variant="outlined"><Typography variant="h4" style={{ "color": "white", "fontFamily": "MinSans" }}>Click To Enter</Typography></Button> 
                </div>
            }
        </>
    )
}