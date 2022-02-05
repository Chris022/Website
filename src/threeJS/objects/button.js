import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"

import car from "./car";

const radius = 2;  // ui: radius
const widthSegments = 100;  // ui: widthSegments
const heightSegments = 100;  // ui: heightSegments
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

let material = new THREE.MeshLambertMaterial({color: 0x1980CF});

let sphere = new THREE.Mesh(geometry, material);

sphere.position.x=10


let renderFunction = (time,keyDict) => {
    let dist = car.mesh.position.distanceTo(sphere.position)
    
    if(dist < 1){
        sphere.visible = true;
    }else{
        sphere.visible = false;
    }
}

let button = createDrawableObject(sphere,renderFunction);

export default button;