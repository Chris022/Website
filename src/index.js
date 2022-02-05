import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'


import Greeting from "./reactJS/Greeting"
import AboutMe from "./reactJS/AboutMe"
import RotateScreen from "./reactJS/RotateScreen"
import Socials from "./reactJS/Socials"
import MobileControls from "./reactJS/MobileControls"
import Menu from './reactJS/Menu'


import { init } from "./threeJS/connector"

const App = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    let threeJSDrawCanvas = useRef(null)
    let threeJSTouchCanvas = useRef(null)

    let [openModal, setOpenModal] = React.useState("")

    useEffect(() => {
        if (isTabletOrMobile) {
            init(threeJSDrawCanvas.current, threeJSTouchCanvas.current, setOpenModal)
        } else {
            init(threeJSDrawCanvas.current, threeJSDrawCanvas.current, setOpenModal)
        }

    }, [])

    return (
        <>
            <Menu setOpenModal={setOpenModal}/>
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
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))