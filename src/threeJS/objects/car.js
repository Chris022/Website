import createDrawableObject from "./objectTemplates/drawable"
import { loadGLBObject } from "./../utils/modelLoading"
import camera, { setPositon, setRotation } from "./camera";
import earth from "./earth";
import * as THREE from "three";

let mesh = await loadGLBObject("./../resources/models/boat.glb")

let rotAxisA = new THREE.Vector3(0, 0, 1).normalize()
let rotAxisB = new THREE.Vector3(1, 0, 0).normalize()
let rotAxisC = new THREE.Vector3(0, 1, 0).normalize()

let vel = 0;

let makeMove = (x, y) => {
    rotAxisC.applyAxisAngle(rotAxisA, x)
    rotAxisB.applyAxisAngle(rotAxisA, x)
    mesh.rotateOnWorldAxis(rotAxisA, x)
    //camera.rotateOnWorldAxis(rotAxisA,x)

    rotAxisC.applyAxisAngle(rotAxisB, y)
    rotAxisA.applyAxisAngle(rotAxisB, y)
    mesh.rotateOnWorldAxis(rotAxisB, y)
    //camera.rotateOnWorldAxis(rotAxisB,y)
}

let a = 0
let counter = 0;


let bufRotAxisA = null
let bufRotAxisB = null
let bufRotAxisC = null
let bufPos = null
let bufRot = null
let bufA = 0
let renderFunction = (time, keyDict) => {

    //create a save state befor moving
    bufRotAxisA = rotAxisA.clone()
    bufRotAxisB = rotAxisB.clone()
    bufRotAxisC = rotAxisC.clone()
    bufPos = mesh.position.clone()
    bufRot = mesh.rotation.clone()
    bufA = a

    if (keyDict["w"]) {
        if (vel < 5)
            vel += 0.3 * time / 16
    }
    else if (keyDict["s"]) {
        if (vel > -5)
            vel -= 0.3 * time / 16
    } else {
        vel /= 1.05 * time / 16
    }


    let movementVector = new THREE.Vector2(-Math.cos(a), -Math.sin(a)).normalize()
    makeMove(vel / 500 * time / 16 * movementVector.x, vel / 500 * time / 16 * movementVector.y)

    mesh.position.x = 25 * rotAxisC.x
    mesh.position.y = 25 * rotAxisC.y
    mesh.position.z = 25 * rotAxisC.z

    //step 1: find normal vector to up
    let up = mesh.position.clone().normalize()
    let normal = new THREE.Vector3().crossVectors(new THREE.Vector3(up.y, up.z, up.x).normalize(), up).normalize()

    let rayPos = mesh.position.clone()

    //step 1: rotate found normal vector around up and do colision detection for every one
    let collision = false
    for (var i = 0; i < 10; i++) {
        //ReyCasting for collision detection
        let raycaster = new THREE.Raycaster();
        raycaster.far = 1.6
        //change raycast position
        raycaster.set(rayPos, normal)

        let intersections = raycaster.intersectObject(earth.mesh);
        intersections.forEach(intersection => {
            if (intersection.distance < 1.4) {
                collision = true
            }
        })
        normal.applyAxisAngle(up.clone().normalize(), Math.PI * 2 / 10).normalize()
    }

    if (collision) {
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

    if (keyDict["a"]) {
        a += (Math.PI / 100) * 1.1 * time / 16
        mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), (Math.PI / 100) * 1.1 * time / 16)
    }

    if (keyDict["d"]) {
        a -= (Math.PI / 100) * 1.1 * time / 16
        mesh.rotateOnAxis(new THREE.Vector3(0, 1, 0), (-Math.PI / 100) * 1.1 * time / 16)
    }

}


let car = createDrawableObject(mesh, renderFunction)

export default car;