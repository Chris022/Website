import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import {CineonToneMapping, MathUtils} from 'three';
import * as THREE from "three";

let mesh = await loadGLBObject("./../resources/models/car.glb")

//let rot = Math.PI/2;
let renderFunction = (time,keyDict) => {

    //if(keyDict["a"]){
    //    rot += Math.PI/100
    //}
    //else if(keyDict["d"]){
    //    rot -= Math.PI/100;
    //}
    //car.mesh.rotation.y = rot
    // //Create a matrix

    // //Rotate the matrix

    // car.mesh.rotation.x -= Math.PI / 1000
    // //rotate the object using the matrix
    // car.mesh.position.applyMatrix4(matrix);
}


let car = createDrawableObject(mesh,renderFunction)

let a = -Math.PI/2
let b = 3* Math.PI/4

car.mesh.position.x = 10*Math.sin(Math.PI/2-a)*Math.sin(b)
car.mesh.position.y = 10*Math.cos(b)
car.mesh.position.z = 10*Math.sin(b)*Math.cos(Math.PI/2-a)

car.mesh.rotateOnWorldAxis(new THREE.Vector3(0,0,1),-b)
car.mesh.rotateOnWorldAxis(new THREE.Vector3(0,1,0),-a)

export default car;