import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import ui from "./ui"
import camera from "./objects/camera";
import scene from "./objects/scene";

let init = (domElement)=>{

    //Get the Canvas and set it as the display Canvas
    let canvas = document.getElementById("canvas1")
    let renderer = new THREE.WebGLRenderer({antialias:true});

    onWindowResize()
    renderer.setPixelRatio( window.devicePixelRatio );

    domElement.appendChild(render.domElement)

    let controls = new OrbitControls(camera, document.getElementById("canvas2"));
    controls.enablePan = true;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableDamping = true;
    controls.enableZoom = true;
    
    controls.update()

    function render(time) {
        time *= 0.001;  // convert time to seconds
    
        //call render on all displayed objects
        scene.renderFunction(time)
       
        controls.update();
        renderer.render(scene.scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener('resize', onWindowResize);

}






