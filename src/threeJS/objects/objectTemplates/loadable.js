import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// renderFunction   -> function that gets called every render cycled... accepts the current time in seconds
export default function createLoadableObject(path){
    let mesh = null
    return {
        renderFunction  : null,
        mesh            : mesh,
        getMesh         : ()=> {
            if(mesh === null){
                let gltfLoader = new GLTFLoader ();
                gltfLoader.load(path, (data) => {
                    let model = data.scene.children[0];
                    mesh = model
                });
                
            }
            return mesh
        }
    }
}