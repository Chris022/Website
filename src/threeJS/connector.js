import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import ui from "./ui"
import camera from "./objects/camera";
import scene from "./objects/scene";

import modalControler from "./modalControler";

export let init = (drawDomElement,controlsDomElement,openModalFunction)=>{

    modalControler.triggerOpen = openModalFunction;
    console.log(modalControler.triggerOpen)

    //Get the Canvas and set it as the display Canvas
    let canvas = document.getElementById("canvas1")
    let renderer = new THREE.WebGLRenderer({antialias:true});

    onWindowResize()
    renderer.setPixelRatio( window.devicePixelRatio );

    drawDomElement.appendChild(renderer.domElement)

    let controls = new OrbitControls(camera, controlsDomElement);
    controls.enablePan = true;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableDamping = true;
    controls.enableZoom = true;
    
    controls.update()

    let lastTime = 0;
    function render(time) {    
        //call render on all displayed objects
        scene.renderFunction(time-lastTime)
       
        controls.update();
        renderer.render(scene.scene, camera);
        requestAnimationFrame(render);

        lastTime = time;
    }
    requestAnimationFrame(render);

    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener('resize', onWindowResize);

}






