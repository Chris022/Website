import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import {MathUtils} from 'three';
import * as THREE from "three";

let mash = await loadGLBObject("./../resources/models/car.glb")


let rot = Math.PI/2;
let renderFunction = (time,keyDict) => {

    if(keyDict["a"]){
        rot += Math.PI/100
    }
    else if(keyDict["d"]){
        rot -= Math.PI/100;
    }
    car.mesh.rotation.y = rot
    // //Create a matrix
    // var matrix = new THREE.Matrix4();
    // //Rotate the matrix
    // matrix.makeRotationX(-Math.PI / 1000);
    // car.mesh.rotation.x -= Math.PI / 1000
    // //rotate the object using the matrix
    // car.mesh.position.applyMatrix4(matrix);
}

let car = createDrawableObject(mash,renderFunction)

car.mesh.position.z = 10

car.mesh.rotation.x = MathUtils.degToRad(90);
car.mesh.rotation.y = MathUtils.degToRad(90);
car.mesh.rotation.z = MathUtils.degToRad(0);


export default car;