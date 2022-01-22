import * as THREE from "three";
import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"
import { Mesh } from "three";

let mesh = await loadGLBObject("./../resources/models/ball.glb")

let renderFunction = (time,keyDict) => {}

let earth = createDrawableObject(mesh,renderFunction); // = createDrawableObject(sphere,renderFunction)

earth.mesh.rotation.x = Math.PI/2;

export default earth;