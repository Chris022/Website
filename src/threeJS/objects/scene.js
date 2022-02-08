import * as THREE from "three";
import createSceneObject    from "./objectTemplates/scene"
import ambiantLight         from "./ambientLight"
import directionalLight1    from "./directionalLight1"
import directionalLight2    from "./directionalLight2"
import hemisphereLight      from "./hemisphereLight";
import boat                  from "./boat"
import earth                from "./earth"
import portAboutMe          from "./portAboutMe";
import portSocials          from "./portSocials";
import portProjects from "./portProjects";
//import clouds               from "./clouds";
//import button               from "./button";


let drawableObjects = [earth,boat,portAboutMe,portSocials,portProjects]
let otherObjectes = [ambiantLight,directionalLight1,directionalLight2,hemisphereLight]

let background = new THREE.Color( 0x77D6FF );

let scene = createSceneObject(drawableObjects,otherObjectes,background)


export default scene;