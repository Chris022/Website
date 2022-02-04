import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import camera,{setPositon,setRotation} from "./camera";
import earth from "./earth";
import * as THREE from "three";

let mesh = await loadGLBObject("./../resources/models/boat.glb")

let rotAxisA = new THREE.Vector3(0,0,1).normalize()
let rotAxisB = new THREE.Vector3(1,0,0).normalize()
let rotAxisC = new THREE.Vector3(0,1,0).normalize()

let makeMove = (x,y) => {
    rotAxisC.applyAxisAngle(rotAxisA,x)
    rotAxisB.applyAxisAngle(rotAxisA,x)
    mesh.rotateOnWorldAxis(rotAxisA,x)
    //camera.rotateOnWorldAxis(rotAxisA,x)

    rotAxisC.applyAxisAngle(rotAxisB,y)
    rotAxisA.applyAxisAngle(rotAxisB,y)
    mesh.rotateOnWorldAxis(rotAxisB,y)
    //camera.rotateOnWorldAxis(rotAxisB,y)
}

let a = 0

let renderFunction = (time,keyDict) => {

    //create a save state befor moving
    let bufRotAxisA = rotAxisA.clone()
    let bufRotAxisB = rotAxisB.clone()
    let bufRotAxisC = rotAxisC.clone()
    let bufPos = mesh.position.clone()
    let bufRot = mesh.rotation.clone()
    let bufA = a

    if(keyDict["w"]){
        makeMove(-Math.PI/100 * Math.cos(a),-Math.PI/100 * Math.sin(a))
    }

    if(keyDict["s"]){
        makeMove(Math.PI/100 * Math.cos(a),Math.PI/100 * Math.sin(a))
    }

    if(keyDict["a"]){
        a += Math.PI/100
        mesh.rotateOnAxis(new THREE.Vector3(0,1,0),Math.PI/100)
        //camera.rotateOnWorldAxis(rotAxisC.clone().normalize(),Math.PI/100)
    }

    if(keyDict["d"]){
        a -= Math.PI/100
        mesh.rotateOnAxis(new THREE.Vector3(0,1,0),-Math.PI/100)
        //camera.rotateOnWorldAxis(rotAxisC.clone().normalize(),-Math.PI/100)
    }

    mesh.position.x = 25*rotAxisC.x
    mesh.position.y = 25*rotAxisC.y
    mesh.position.z = 25*rotAxisC.z

    //step 1: find normal vector to up
    let up = mesh.position.clone().normalize()
    let normal = new THREE.Vector3().crossVectors(new THREE.Vector3(up.y,up.z,up.x).normalize(),up).normalize()

    let rayPos = mesh.position.clone()

    //step 1: rotate found normal vector around up and do colision detection for every one
    let collision = false
    for(var i = 0; i < 10; i++){
        //ReyCasting for collision detection
        let raycaster = new THREE.Raycaster();
        //change raycast position
        raycaster.set(rayPos ,normal)
    
        let intersections = raycaster.intersectObject(earth.mesh);
        intersections.forEach(intersection => {
            if (intersection.distance < 1.4){
                collision = true
            }
        })
        normal.applyAxisAngle(up.clone().normalize(),Math.PI*2/10).normalize()
    }
    
    if(collision){
        //rest movment
        rotAxisA = bufRotAxisA
        rotAxisB = bufRotAxisB
        rotAxisC = bufRotAxisC
        mesh.position.x = bufPos.x
        mesh.position.y = bufPos.y
        mesh.position.z = bufPos.z
        mesh.setRotationFromEuler(bufRot)
        a = bufA
    }

}


let car = createDrawableObject(mesh,renderFunction)

export default car;