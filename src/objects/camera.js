import * as THREE from "three";

let fov = 50;
let aspect = 2;  // the canvas default
let near = 0.01;
let far = 50;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 30;
camera.lookAt (new THREE.Vector3(0,0,0));

export default camera;

