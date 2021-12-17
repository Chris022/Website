import createSceneObject from "./objectTemplates/scene"
import earth from "./earth"
import light from "./light"


let drawableObjects = [earth]
let otherObjectes = [light]

let scene = createSceneObject(drawableObjects,otherObjectes)

export default scene;