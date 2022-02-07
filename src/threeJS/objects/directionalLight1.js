import * as THREE from "three";

let directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight1.position.set(0, 30, 0); // x, y, z
directionalLight1.castShadow = true;


export default directionalLight1;