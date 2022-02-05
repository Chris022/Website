import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"

import car from "./car";
import modalControler from "../modalControler";

const radius = 2;  // ui: radius
const widthSegments = 100;  // ui: widthSegments
const heightSegments = 100;  // ui: heightSegments
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

let material = new THREE.MeshLambertMaterial({color: 0x1980CF});

let sphere = new THREE.Mesh(geometry, material);

sphere.position.x=25

let counter = 0;
let renderFunction = (time,keyDict) => {
    if(counter == 10){
        counter = 0;
        let dist = car.mesh.position.distanceTo(sphere.position)

        if(dist < 3){
            if(keyDict[" "]){
                console.log(modalControler.triggerOpen)
                modalControler.triggerOpen("socialsModal")
            }
        }
    }
    counter ++;
}

let button = createDrawableObject(sphere,renderFunction);

export default button;