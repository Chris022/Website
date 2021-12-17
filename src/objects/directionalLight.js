import * as THREE from "three";

let directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(0, 5, 5); // x, y, z

export default directionalLight;