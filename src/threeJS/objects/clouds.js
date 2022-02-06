import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import {MathUtils} from 'three';

let renderFunction = (time) => {}

let clouds = [];

for(var i = 0; i < 10; i+=Math.PI/5){
    let mash = await loadGLBObject("./../resources/models/cloud.glb")[0]
    let cloud = createDrawableObject(mash,renderFunction)

    cloud.mesh.position.x = 13*Math.cos(i)
    cloud.mesh.position.y = 13*Math.sin(i)
    cloud.mesh.position.z = 0

    cloud.mesh.rotation.x = Math.PI/2
    cloud.mesh.rotation.y = Math.PI/2 + i
    clouds.push(cloud)
}


export default clouds;