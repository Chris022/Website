import * as THREE from "three";
import camera from "./camera"

let directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight2.position.set(0, -50, 0); // x, y, z
directionalLight2.castShadow = true;
directionalLight2.shadow.mapSize.set(300,300)
directionalLight2.shadow.camera.far = camera.far
directionalLight2.shadow.camera.near = camera.near
directionalLight2.shadow.camera.left = -30
directionalLight2.shadow.camera.bottom = -30
directionalLight2.shadow.camera.right = 30
directionalLight2.shadow.camera.top = 30
directionalLight2.angle = Math.PI/2

export default directionalLight2;