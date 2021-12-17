// renderFunction   -> function that gets called every render cycled... accepts the current time in seconds
// mash             -> threeJs Mesh object

export default function createDrawableObject(mesh,renderFunction){
    return {
        renderFunction  : renderFunction,
        mesh            : mesh
    }
}