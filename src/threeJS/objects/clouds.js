import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import {MathUtils} from 'three';

let renderFunction = (time) => {}

let clouds = [];
let mash = await loadGLBObject("./../resources/models/cloud.glb")
for(var i = 0; i < 10; i+=Math.PI/5){

    let cloud = createDrawableObject(mash.clone(),renderFunction)

    let rndX = Math.random()-0.5
    let rndY = Math.random()-0.5
    let rndZ = Math.random()-0.5

    let len = Math.sqrt(rndX*rndX+rndY*rndY+rndZ*rndZ)

    rndX /= len
    rndY /= len
    rndZ /= len

    rndX *= 35
    rndY *= 35
    rndZ *= 35

    cloud.mesh.position.x = rndX
    cloud.mesh.position.y = rndY
    cloud.mesh.position.z = rndZ

    cloud.mesh.lookAt(new THREE.Vector3(0,0,0))
    clouds.push(cloud)
}


export default clouds;