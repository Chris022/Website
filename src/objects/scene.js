import createSceneObject    from "./objectTemplates/scene"
import earth                from "./earth"
import ambiantLight         from "./ambientLight"
import directionalLight     from "./directionalLight"


let drawableObjects = [earth]
let otherObjectes = [ambiantLight,directionalLight]

let background = 0xddeaff;

let scene = createSceneObject(drawableObjects,otherObjectes,background)

export default scene;