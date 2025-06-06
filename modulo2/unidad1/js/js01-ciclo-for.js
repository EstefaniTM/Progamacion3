for (let i =1; i<=15; i++) {
    console.log("Iteracion" + i);
}

for (let i =1; i<=10; i++) {
    console.log("2 X",i, "=", 2 * i);
}

let suma = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log("El numero es par: " + i);
        suma += i;
    }
}

console.log("La suma de los 10 primeros numeros pares es: " + suma);
// Ejercicio 1: Crear un ciclo for que imprima los números del 1 al 10

let cuadrado = 0;
for (let i = 1; i <= 10; i++) {
    cuadrado = i * i;
    console.log("El cuadrado de " + i + " es: " + cuadrado);
}
// Ejercicio 2: Crear un ciclo for que imprima los números del 1 al 10 y su cuadrado

let palabras = "Hola";
for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}

