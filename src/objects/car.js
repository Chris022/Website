import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import {CineonToneMapping, MathUtils} from 'three';
import camera,{setPositon,setRotation} from "./camera";
import * as THREE from "three";

let mesh = await loadGLBObject("./../resources/models/boat.glb")


let a = 0

let rotAxisA = new THREE.Vector3(0,0,1).normalize()
let rotAxisB = new THREE.Vector3(1,0,0).normalize()
let rotAxisC = new THREE.Vector3(0,1,0).normalize()

let makeMove = (x,y) => {
    rotAxisC.applyAxisAngle(rotAxisA,x)
    rotAxisB.applyAxisAngle(rotAxisA,x)
    mesh.rotateOnWorldAxis(rotAxisA,x)
    camera.rotateOnWorldAxis(rotAxisA,x)

    rotAxisC.applyAxisAngle(rotAxisB,y)
    rotAxisA.applyAxisAngle(rotAxisB,y)
    mesh.rotateOnWorldAxis(rotAxisB,y)
    camera.rotateOnWorldAxis(rotAxisB,y)
}

let renderFunction = (time,keyDict) => {
    if(keyDict["w"]){
        makeMove(-Math.PI/100 * Math.cos(a),-Math.PI/100 * Math.sin(a))
    }

    if(keyDict["s"]){
        makeMove(Math.PI/100 * Math.cos(a),Math.PI/100 * Math.sin(a))
    }

    if(keyDict["a"]){
        a += Math.PI/100
        mesh.rotateOnAxis(new THREE.Vector3(0,1,0),Math.PI/100)
        camera.rotateOnWorldAxis(rotAxisC.clone().normalize(),Math.PI/100)
    }

    if(keyDict["d"]){
        a -= Math.PI/100
        mesh.rotateOnAxis(new THREE.Vector3(0,1,0),-Math.PI/100)
        camera.rotateOnWorldAxis(rotAxisC.clone().normalize(),-Math.PI/100)
    }

    mesh.position.x = 25*rotAxisC.x
    mesh.position.y = 25*rotAxisC.y
    mesh.position.z = 25*rotAxisC.z

    //setPositon(rotAxisC)
}

let car = createDrawableObject(mesh,renderFunction)

export default car;