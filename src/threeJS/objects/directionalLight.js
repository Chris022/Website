import * as THREE from "three";

let directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
directionalLight1.position.set(0, 30, 0); // x, y, z
directionalLight1.castShadow = true;
//directionalLight1.lookAt(new THREE.Vector3(0,0,0))


export default directionalLight1;