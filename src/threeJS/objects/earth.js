import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import { Mesh } from "three";

let mesh = await loadGLBObject("./../resources/models/earth.glb")

//let bodyGeom = new THREE.SphereGeometry(10)
//
//let meshes = [new THREE.Mesh(bodyGeom,new THREE.MeshPhongMaterial({ color: 0xB7513C, flatShading: true }))]
//console.log(meshes)
let renderFunction = (time,keyDict) => {}

let earth = createDrawableObject(mesh,renderFunction); // = createDrawableObject(sphere,renderFunction)

export default earth;