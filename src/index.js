import ReactDOM from 'react-dom'
import React,{useRef,useEffect} from 'react'

import Greeting from "./reactJS/Greeting"

import {init} from "./threeJS/connector"

const App = () => {

    let threeJSCanvas = useRef(null)

    useEffect(()=>{
        init(threeJSCanvas.current,threeJSCanvas.current)
    },[])


    return (
        <>
            <div ref={threeJSCanvas}>
            </div>
            <Greeting/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))