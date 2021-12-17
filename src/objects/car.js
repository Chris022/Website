import createDrawableObject from "./objectTemplates/drawable"
import {loadGLBObject}      from "./../utils/modelLoading"

let mash = await loadGLBObject("./../resources/models/car/car.glb")

let renderFunction = (time) => {
    mash.rotation.x = time;
    mash.rotation.y = time;
}

let car = createDrawableObject(mash,renderFunction)
export default car;