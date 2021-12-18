import * as THREE from "three";

let fov = 100;
let aspect = 2;  // the canvas default
let near = 0.1;
let far = 20;
let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 15;
camera.lookAt (new THREE.Vector3(0,0,0));

export default camera;

