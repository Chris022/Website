import * as THREE from "three";

let directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
directionalLight.position.set(27, 27, 27); // x, y, z

export default directionalLight;