//import * as world from "./world"
//import * as ui from "./ui"
import React,{useRef,useEffect} from 'react'
import ReactDOM from 'react-dom'
import {init} from "./threeJS/connector"

const App = () => {

    let threeJSCanvas = useRef(null)

    useEffect(()=>{
        init(threeJSCanvas.current,threeJSCanvas.current)
    },[])


    return (
        <div ref={threeJSCanvas}>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))