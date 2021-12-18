import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"

const radius = 9.1;  // ui: radius
const widthSegments = 100;  // ui: widthSegments
const heightSegments = 100;  // ui: heightSegments
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

let material = new THREE.MeshLambertMaterial({color: 0x1980CF});


let sphere = new THREE.Mesh(geometry, material);

let renderFunction = (time) => {
}

let earth = createDrawableObject(sphere,renderFunction)

export default earth;