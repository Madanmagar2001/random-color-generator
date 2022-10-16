const button = document.querySelector('.btn');
const hexaColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const colorCodeInHexa = document.querySelector('.color');
function hexGenerator() {
    return Math.floor(Math.random() * hexaColor.length);
}

function hexaColorGenerator() {
    let hexaColorCode = "#";
    for (let i = 0; i < 6; i ++) {
        hexaColorCode = hexaColorCode + hexaColor[hexGenerator()]
    }
    document.body.style.backgroundColor = hexaColorCode;
}

button.addEventListener('click',hexaColorGenerator);

document.body.addEventListener('keypress', function(e) {
    if (e.keyCode == 32) {
        hexaColorGenerator()
    }
})