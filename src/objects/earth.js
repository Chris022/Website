import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"

const radius = 9.1;  // ui: radius
const widthSegments = 100;  // ui: widthSegments
const heightSegments = 100;  // ui: heightSegments
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

let material = new THREE.MeshLambertMaterial({color: 0x1980CF});


let sphere = new THREE.Mesh(geometry, material);

let mash = await loadGLBObject("./../resources/models/earth.glb")

let rot = Math.PI/2;
let quater = 0
let renderFunction = (time,keyDict) => {
    if(keyDict["a"]){
        rot += Math.PI/100
    }
    else if(keyDict["d"]){
        rot -= Math.PI/100;
    }
    if(keyDict["w"]){
        mash.rotation.x += Math.sin(rot)/200;
        mash.rotation.y -= Math.cos(rot)/200;
    }

}

let earth = createDrawableObject(mash,renderFunction)// = createDrawableObject(sphere,renderFunction)

export default earth;