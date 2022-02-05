import * as THREE from "three";
import keyDict from "./keyHandler";

// drawableObjects  -> array of all drawable Objects that should be added to the secene
// otherObjects     -> list of all objects that don't habe a mesh and don't have a render method
// backgroundColor  -> Three.color
export default function createSceneObject(drawableObjects,otherObjects,backgroundColor){
    let scene = new THREE.Scene();

    scene.background = backgroundColor

    drawableObjects.forEach(object => {
        scene.add(object.mesh)
    });

    otherObjects.forEach(object => {
        scene.add(object)
    })

    let renderFunction = (time) => {
        drawableObjects.forEach(object => {
            object.renderFunction(time,keyDict)
        });
    }

    return {
        objects         : drawableObjects,
        renderFunction  : renderFunction,
        scene           : scene
    }
}