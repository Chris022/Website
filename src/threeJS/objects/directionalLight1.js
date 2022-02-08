import * as THREE from "three";
import camera from "./camera"

let directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight1.position.set(0, 50, 0); // x, y, z
directionalLight1.castShadow = true;
directionalLight1.shadow.mapSize.set(300,300)
directionalLight1.shadow.camera.far = camera.far
directionalLight1.shadow.camera.near = camera.near
directionalLight1.shadow.camera.left = -30
directionalLight1.shadow.camera.bottom = -30
directionalLight1.shadow.camera.right = 30
directionalLight1.shadow.camera.top = 30
directionalLight1.angle = Math.PI/2



export default directionalLight1;