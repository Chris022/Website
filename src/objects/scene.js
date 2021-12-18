import * as THREE from "three";
import createSceneObject    from "./objectTemplates/scene"
import ambiantLight         from "./ambientLight"
import directionalLight     from "./directionalLight"
import car                  from "./car"
import earth                from "./earth"



let drawableObjects = [car,earth]
let otherObjectes = [ambiantLight,directionalLight]

let background = new THREE.Color( 0x77D6FF );

let scene = createSceneObject(drawableObjects,otherObjectes,background)


export default scene;