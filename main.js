const background = document.body;
const hexaColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const colorCodeInHexa = document.querySelector('.color');
function colorGenerator() {
    let hexa1 = Math.floor(Math.random() * 16);
    let hexa2 = Math.floor(Math.random() * 16);
    let hexa3 = Math.floor(Math.random() * 16);
    let hexa4 = Math.floor(Math.random() * 16);
    let hexa5 = Math.floor(Math.random() * 16);
    let hexa6 = Math.floor(Math.random() * 16);
    let colorCode1 = hexaColor[hexa1];
    let colorCode2 = hexaColor[hexa2];
    let colorCode3 = hexaColor[hexa3];
    let colorCode4 = hexaColor[hexa4];
    let colorCode5 = hexaColor[hexa5];
    let colorCode6 = hexaColor[hexa6];
    let hexacode = "#" + colorCode1 + colorCode2 + colorCode3 + colorCode4 + colorCode5 + colorCode6;
    background.style.backgroundColor = hexacode;
    colorCodeInHexa.innerText = hexacode;
}
background.addEventListener('click',colorGenerator);

background.addEventListener('keypress', function(e) {
    if (e.keyCode == 32) {
        colorGenerator()
    }
})