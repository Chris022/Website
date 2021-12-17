import createSceneObject    from "./objectTemplates/scene"
import ambiantLight         from "./ambientLight"
import directionalLight     from "./directionalLight"
import car                  from "./car"



let drawableObjects = [car]
let otherObjectes = [ambiantLight,directionalLight]

let background = 0xddeaff;

let scene = createSceneObject(drawableObjects,otherObjectes,[],background)


export default scene;