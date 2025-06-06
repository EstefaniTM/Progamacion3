const caja = document.getElementById('caja');
caja.addEventListener('mouseover', () => caja.style.backgroundColor = 'red');
caja.addEventListener('mouseout', () => caja.style.background = 'lightgray');
caja.addEventListener('click', () => alert('Hola, soy una alerta'));

const area = document.getElementById('areaTouch');
area.addEventListener('touchstart', () => {
    area.style.backgroundColor = 'deepSkyBlue';
    console.log('touched');
});
area.addEventListener('touchend', () => {
    area.style.backgroundColor = 'skyblue';
    console.log('touched finalizado');
});
const circulo = document.getElementById('circulo');
let colores = ['red', 'blue', 'green', 'yellow', 'purple'];
let colorActual = 0;
let arrastrado = false;
function cambiarColor() {
    colorActual = (colorActual + 1) % colores.length;
    circulo.style.backgroundColor = colores[colorActual];
}

//Mover el circulo al punto (centrado)
function moverCirculo(x, y) {
    const container= document.getElementById('circulo');
    
}