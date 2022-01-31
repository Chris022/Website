
const canvas = document.getElementById("canvas2");







onWindowResize();
function onWindowResize() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
window.addEventListener('resize', onWindowResize);