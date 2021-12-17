import * as THREE from "three";
import camera from "./objects/camera";
import scene from "./objects/scene";

//Get the Canvas and set it as the display Canvas
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});

//Set the renderer to use the camera and scene
renderer.render(scene.scene, camera);


function render(time) {
    time *= 0.001;  // convert time to seconds

    //check if the size of the browser window changed
    if (resizeRendererToDisplaySize(renderer)) {
        //change the aspact ratio accordinly
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    //call render on all displayed objects
    scene.renderFunction(time)
   
    renderer.render(scene.scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
}