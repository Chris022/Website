import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

import Project from './Project';


let NAME = "projectsModal"
export default function Projects({ openModalTigger }) {

    let [open, setOpen] = React.useState(false)

    let handleClose = () => {
        setOpen(false)
    }

    React.useEffect(() => {
        if (openModalTigger == NAME) {
            setOpen(true)
        }
    }, [openModalTigger])


    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="lg"
            PaperProps={{
                style: {
                  background: "#0ac repeating-conic-gradient(hsla(175, 100%, 77%, 1) 0 15deg, hsla(175, 100%, 89%, 1) 0 30deg)",
                  boxShadow: 'none',
                },
              }}
        >
            <DialogTitle><center><Typography variant="h2" style={{ "fontFamily": "MinSans" }}>Projects</Typography></center></DialogTitle>
            <center>
                <Typography variant="p" style={{ "fontFamily": "MinSans" }}>
                    Die folgenden Projekte sind nur einige der vielen, die ich bereits umgesetzt habe
                </Typography>
                <br/>
                <Typography variant="a" style={{ "fontFamily": "MinSans" }}>
                    <a href="https://github.com/Chris022">Alle meine Projekte findet man auf GitHub</a>
                </Typography>
            </center>
            <div className="App-Projects-List" style={{ "margin": 20 }}>
                {MathBook}
                {Viewer3D}
                {Engine}
                {Image}
                {Homepage}
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


let infoMathBook = "Bei diesem Programm handelt es sich um eine virtuelle Schultafel, welche darauf ausgelegt ist, Formeln zu schreiben. Die Idee dazu ist während der Zeit des online-schoolings geboren worden und soll den virtuellen Matheunterricht erleichtern.";

let umsetzungMathBook = "Das Programm ist dabei in Java mithilfe der graphischen Library Swing programmiert worden. Um eine schnelle und einfache Eingabe der Formeln garantieren zu können, wurde, extra für diese Anwendung, eine kleine Skript-Sprache, ausgelegt auf das Schreiben von Formeln, implementiert!";

let MathBook = <Project heading="MathBook" data={
    [
        { name: "Info:", element: <h1 className="App-Projects-Text">{infoMathBook}</h1> },
        { name: "Umsetzung:", element: <h1 className="App-Projects-Text">{umsetzungMathBook} <a className="App-Projects-Link" href="https://github.com/ChristophHTLSalzburg/MathBook">Mehr Informationen auf GitHub</a></h1> },
        {
            name: "Screenshots:", element: <>
                <img src="./resources/images/screenshotMathBook1.png" className="App-Project-Image" alt="Screenshot" />
            </>
        }
    ]} />



let info3DViewer = "Bei diesem Programm handelt es sich um einen 3D Viewer, welcher es einem erlaubt 3D Modelle im .obj Format anzuzeigen. Diese können dabei in alle Richtungen gedreht, gezoomt und bewegt werden.";

let umsetzung3DViewer = "Das Programm ist dabei in Haskell mithilfe der mithilfe der 2D-GraphikLibrary Gloss umgesetzt. Anzumerken ist, dass sowohl der Obj-Parser als auch der 3DRenderer ohne eine jeweilige Library programmiert wurde! Es wurde lediglich eine 2D-Zeichen Library verwendet."

let Viewer3D = <Project heading="3DViewer" data={
    [
        { name: "Info:", element: <h1 className="App-Projects-Text">{info3DViewer}</h1> },
        { name: "Umsetzung:", element: <h1 className="App-Projects-Text">{umsetzung3DViewer} <a className="App-Projects-Link" href="https://github.com/Chris022/3D-render-engine">Mehr Informationen auf GitHub</a></h1> },
        {
            name: "Screenshots:", element: <>
                <img src="./resources/images/screenshot3DViewer1.png" className="App-Project-Image" alt="Screenshot" />
            </>
        }
    ]} />



let infoEngine = "Hierbei handelt es sich um eine einfache Spiele Engine. Diese erlaubt es einem im objektorientierten Stiel, Spiele zu schreibe.  Besondere Features sind dabei, Stereo Audio, Animierte Sprites und eine 2D Physik Engine. Bei der Entwicklung wurde großes Augenmerk auf eine einfache Verwendung gelegt.";

let umsetzungEngine = "Die Bibliothek ist dabei in Java programmiert worden und ist dabei Objektorientiert und Event-basiert."

let Engine = <Project heading="Java-Gameengine" data={
    [
        { name: "Info:", element: <h1 className="App-Projects-Text">{infoEngine}</h1> },
        { name: "Umsetzung:", element: <h1 className="App-Projects-Text">{umsetzungEngine} <a className="App-Projects-Link" href="https://github.com/Chris022/simple-game-enginee">Mehr Informationen auf GitHub</a></h1> },
    ]} />



let infoImage = "Hierbei handelt es sich um eine einfache Zeichen Bibliothek, welche es einem ermöglicht, Bilder im Format PPM zu erstellen und zu bearbeiten.";

let umsetzungImage = "Die Bibliothek ist dabei in Haskell programmiert worden und ist somit rein funktional."

let Image = <Project heading="PPM-ImageLib" data={
    [
        { name: "Info:", element: <h1 className="App-Projects-Text">{infoImage}</h1> },
        { name: "Umsetzung:", element: <h1 className="App-Projects-Text">{umsetzungImage} <a className="App-Projects-Link" href="https://github.com/Chris022/ppm-image-lib">Mehr Informationen auf GitHub</a></h1> },
    ]} />



let infoHomePage = "Meine Eigene kleine Welt :-)";

let umsetzungHomePage = "Die Website ist mit React und threeJs programmiert. Die Modelle sind alle in Bleder gezeichnet"

let Homepage = <Project heading="Homepage" data={
    [
        { name: "Info:", element: <h1 className="App-Projects-Text">{infoHomePage}</h1> },
        { name: "Umsetzung:", element: <h1 className="App-Projects-Text">{umsetzungHomePage} <a className="App-Projects-Link" href="https://github.com/Chris022/website">Mehr Informationen auf GitHub</a></h1> },
    ]} />