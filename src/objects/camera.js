import * as THREE from "three";

let fov = 75;
let aspect = 2;  // the canvas default
let near = 0.1;
let far = 5;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;


export default camera;

