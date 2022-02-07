import * as THREE from "three";

let directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight2.position.set(0, -30, 0); // x, y, z
directionalLight2.castShadow = true;


export default directionalLight2;