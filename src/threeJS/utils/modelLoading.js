import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export async function loadGLBObject(path){
    let gltfLoader = new GLTFLoader ();

    const loadfunc = (path) => {
        return new Promise((resolve, reject) => {
            gltfLoader.load(path, (data) => {
                resolve(data);
            });
        });
    }
    let model = await loadfunc(path).then((data) => { 
        return data.scene.children[0];
    })
    return model
}