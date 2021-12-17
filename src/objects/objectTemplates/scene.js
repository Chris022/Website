import * as THREE from "three";


// drawableObjects  -> array of all drawable Objects that should be added to the secene
export default function createSceneObject(drawableObjects){
    let scene = new THREE.Scene();

    drawableObjects.forEach(object => {
        scene.add(object.mesh)
    });

    let renderFunction = (time) => {
        drawableObjects.forEach(object => {
            object.renderFunction(time)
        });
    }

    return {
        objects         : drawableObjects,
        renderFunction  : renderFunction,
        scene           : scene
    }
}