import ReactDOM from 'react-dom'
import React,{useRef,useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

import Greeting from "./reactJS/Greeting"
import AboutMe from "./reactJS/AboutMe"
import RotateScreen from "./reactJS/RotateScreen"
import MobileControls from "./reactJS/MobileControls"

import {init} from "./threeJS/connector"

const App = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    let threeJSCanvas = useRef(null)

    useEffect(()=>{
        init(threeJSCanvas.current,threeJSCanvas.current)
    },[])

    return (
        <>
            <div ref={threeJSCanvas} style={{"position":"absolute"}}>
            </div>
            {(isTabletOrMobile && isPortrait)
                ? <RotateScreen/>
                : <Greeting/>
            }
            {(isTabletOrMobile && !isPortrait) &&
                <MobileControls/>
            }
            <AboutMe/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))