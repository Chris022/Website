import * as THREE from "three";

let fov = 75;
let aspect = 2;  // the canvas default
let near = 0.1;
let far = 20;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4;
camera.position.y = 3;
camera.position.x = 3;

camera.rotation.x = -3.14/6;
camera.rotation.y = 3.14/6;
camera.rotation.z = 3.14/11;


export default camera;

