let i;
while (1<=2){
    console.log("Iteracion" + i);
    i++;
}

let cont =1;
while (cont <= 10) {
    console.log("2 X", cont, "=", 2 * cont);
    cont++;
}

let mult = 0;
console.log("Do...while");
do {
    console.log(3,"x ", mult, "=", 3 * mult);
    mult++;
} while (mult <= 10);
// Ejercicio 1: Crear un ciclo while que imprima los números del 1 al 10

let n = 10;
console.log("Do...while");
do {
    console.log(3,"x ", mult, "=", 3 * mult);
    n--;
} while (n>=6);

let animales = ["perro", "gato", "loro", "raton", "pajaro"];
let animal = 0;
do { 
    console.log("Animal", animal, "ex: ", animales[animal]);
    animal++;
}while (animal>=9);


const numeos = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    if(numero > 10) 
        console.log("El numero es: ", numero);
}

const persona ={
    nombre: "Luis",
    edad: 25,
    ciudad: "Lima"
}

console.log("Nombre:", persona["nombre"]);

console.log("ciclo for in");
for (const key in persona) {
    console.log(key, " : ", persona[key]);
}