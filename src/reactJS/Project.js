import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

export default function Project({heading,data}){


    return (
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="project"
            >
              <Typography variant="h4" style={{ "fontFamily": "MinSans" }}>{heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="Project-Container">
                  {
                      data.map((x)=>{
                          return (
                                <>
                                    <Typography variant="h4" style={{ "fontFamily": "MinSans" }}>{x.name}</Typography>
                                    <Typography variant="p" style={{ "fontFamily": "MinSans-Normal","fontSize":10 }}>{x.element}</Typography>
                                    <br/>
                                    <br/>
                                </>
                          );
                      })
                  }
              </div>
            </AccordionDetails>
        </Accordion>
    );
}