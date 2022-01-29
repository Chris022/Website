import * as THREE from "three";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//import ui from "./ui"
import camera from "./objects/camera";
import scene from "./objects/scene";


//Get the Canvas and set it as the display Canvas
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setPixelRatio( window.devicePixelRatio );



camera.position.y = 60

let controls = new OrbitControls(camera, canvas);
controls.enablePan = true;
controls.maxPolarAngle = Math.PI / 2;
controls.enableDamping = true;

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
onWindowResize()

function onWindowResize() {
 
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
   
    renderer.setSize( window.innerWidth, window.innerHeight );
   
}

window.addEventListener('resize', onWindowResize);