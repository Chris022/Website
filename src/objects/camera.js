import * as THREE from "three";
import {MathUtils} from 'three';

let fov = 50;
let aspect = 2;  // the canvas default
let near = 0.01;
let far = 50;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.y = 30;
camera.lookAt(0,0,0)
camera.rotation.z = MathUtils.degToRad(-90);
camera.updateMatrix();

export default camera;

