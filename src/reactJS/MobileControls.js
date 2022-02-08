import React from 'react'
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function MobileControls({refC}) {

    let downForward = ()=>{
        document.dispatchEvent(new KeyboardEvent('keydown', {
            'key': 'w'
        }));
    }
    let downBackward = ()=>{
        document.dispatchEvent(new KeyboardEvent('keydown', {
            'key': 's'
        }));
    }
    let downRight = ()=>{
        document.dispatchEvent(new KeyboardEvent('keydown', {
            'key': 'd'
        }));
    }
    let downLeft = ()=>{
        document.dispatchEvent(new KeyboardEvent('keydown', {
            'key': 'a'
        }));
    }

    let upForward = ()=>{
        document.dispatchEvent(new KeyboardEvent('keyup', {
            'key': 'w'
        }));
    }
    let upBackward = ()=>{
        document.dispatchEvent(new KeyboardEvent('keyup', {
            'key': 's'
        }));
    }
    let upRight = ()=>{
        document.dispatchEvent(new KeyboardEvent('keyup', {
            'key': 'd'
        }));
    }
    let upLeft = ()=>{
        document.dispatchEvent(new KeyboardEvent('keyup', {
            'key': 'a'
        }));
    }

    return (
        <div style={{"position":"absolute","width":"100%","height":"100%","zIndex":1,"pointer-events": "none"}} ref={refC}>    
        <table style={{"width":"100%","height":"100%","tableLayout":"fixed"}}>
            <tbody>
            <tr>
            <td style={{"verticalAlign":"middle","textAlign":"center"}}>
                <div>
                    <Button variant="outlined" size="large" onTouchStart={downForward} onTouchEnd={upForward}><ArrowUpwardIcon sx={{ fontSize: 80 }}/></Button>
                    <br/>
                    <Button variant="outlined" size="large" onTouchStart={downBackward} onTouchEnd={upBackward}><ArrowDownwardIcon sx={{ fontSize: 80 }}/></Button>
                </div>
            </td>
            <td><span></span></td>
            <td style={{"verticalAlign":"middle","textAlign":"center"}}>
                <Button variant="outlined" size="large" onTouchStart={downLeft} onTouchEnd={upLeft}><ArrowBackIcon sx={{ fontSize: 80 }}/></Button>
                <Button variant="outlined" size="large" onTouchStart={downRight} onTouchEnd={upRight}><ArrowForwardIcon sx={{ fontSize: 80 }}/></Button>
            </td>
            </tr>
            </tbody>
        </table>
        </div>

    )
}
