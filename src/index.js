import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'


import Greeting from "./reactJS/Greeting"
import AboutMe from "./reactJS/AboutMe"
import RotateScreen from "./reactJS/RotateScreen"
import Socials from "./reactJS/Socials"
import MobileControls from "./reactJS/MobileControls"
import Menu from './reactJS/Menu'
import InfoScreen from './reactJS/InfoScreen'


import { init } from "./threeJS/connector"
import Projects from './reactJS/Projects'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

const App = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    let threeJSDrawCanvas = useRef(null)
    let threeJSTouchCanvas = useRef(null)


    let [country, setCountry] = React.useState("")
    let [range, setRange] = React.useState(false)
    let [modalName, setModalName] = React.useState("")

    let [openModal,setOpenModal] = React.useState("")

    let openModalFunc = () => {
        setOpenModal("")
        sleep(100).then(() => {
            setOpenModal(modalName)
        })
    }

    useEffect(() => {
        if (isTabletOrMobile) {
            init(threeJSDrawCanvas.current, threeJSTouchCanvas.current, setModalName,setCountry,setRange)
        } else {
            init(threeJSDrawCanvas.current, threeJSDrawCanvas.current, setModalName,setCountry,setRange)
        }

    }, [])

    return (
        <>
            <Menu setOpenModal={setOpenModal}/>
            <InfoScreen country={country} range={range} openModalFunc={openModalFunc}/>
            <div ref={threeJSDrawCanvas} style={{ "position": "absolute" }}> </div>
            {(isTabletOrMobile && isPortrait)
                ? <RotateScreen />
                : <Greeting />
            }
            {(isTabletOrMobile && !isPortrait) &&
                <MobileControls refC={threeJSTouchCanvas} />
            }
            <AboutMe openModalTigger={openModal} />
            <Socials openModalTigger={openModal} />
            <Projects openModalTigger={openModal} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))