import * as THREE from "three";

const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});

let fov = 75;
let aspect = 2;  // the canvas default
let near = 0.1;
let far = 5;

let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;

const scene = new THREE.Scene();

const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

renderer.render(scene, camera);

function render(time) {
    time *= 0.001;  // convert time to seconds

    //check if the size of the browser window changed
    if (resizeRendererToDisplaySize(renderer)) {
        //change the aspact ratio accordinly
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
   
    cube.rotation.x = time;
    cube.rotation.y = time;
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }