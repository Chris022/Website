let keyDict = {}

let handlekeydown = (event) => {
    keyDict[event.key] = true;
}

let handlekeyup = (event) => {
    keyDict[event.key] = false;
}

document.addEventListener('keydown', handlekeydown, false);
document.addEventListener('keyup', handlekeyup, false);

export default keyDict;