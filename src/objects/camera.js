import * as THREE from "three";
import {MathUtils} from 'three';

let fov = 50;
let aspect = 2;  // the canvas default
let near = 0.01;
let far = 70;

let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);


export let setPositon = (vect) => {
    camera.position.x = 68*vect.x
    camera.position.y = 68*vect.y
    camera.position.z = 68*vect.z
}
export let setRotation = (vect,rot) => {
    camera.rotateOnWorldAxis(vect,rot)
}
camera.position.y = 68


camera.lookAt(0,0,0)

camera.rotation.z = -Math.PI/2

camera.updateMatrix();

export default camera;

