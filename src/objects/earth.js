import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"

let boxWidth = 1;
let boxHeight = 1;
let boxDepth = 1;
let geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

let material = new THREE.MeshBasicMaterial({color: 0x44aa88});


let cube = new THREE.Mesh(geometry, material);

let renderFunction = (time) => {
    cube.rotation.x = time;
    cube.rotation.y = time;
}

let earth = createDrawableObject(cube,renderFunction)

export default earth;