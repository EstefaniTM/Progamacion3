console.log("Tipos de variables");
console.log("1. variables primitivas");


let mensaje = "Hola Mundo"; //string
let edad = 25; //number
let activo = true; //boolean
let vacio = null; //null
let x; //undefined

console.log("mensaje:", mensaje,"tipo de variable:", typeof mensaje);
console.log("edad:", edad,"tipo de variable:", typeof edad);
console.log("activo:", activo,"tipo de variable:", typeof activo);
console.log("vacio:", vacio,"tipo de variable:", typeof vacio);
console.log("x:", x,"tipo de variable:", typeof x);

console.log("2. variables no primitivas");
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
};
console.log("Apellido", persona.apellido,"tipo de variable:", typeof persona);
persona.apellido = "Gómez";
console.log("Apellido", persona.apellido,"tipo de variable:", typeof persona);

const frutas = ["manzana", "banana", "naranja"];
console.log("Frutas:", frutas,"tipo de variable:", typeof frutas);

const hoy = new Date();
console.log("Fecha:", hoy,"tipo de variable:", typeof hoy);
console.log("3. expresiones regulares");
const regex = /[a-z]+/;
console.log(regex.test("abc")); //true
console.log(regex.test("ABC")); //false
console.log(regex.test("123")); //false
console.log(regex.test("abc123")); //true
console.log(regex.test("123abc")); //true
//verificar que la cadena contiene letras minusculas//

console.log("CONVERSIONES");
a= "10";
b = 5;
mutiplicacion = a * b;
console.log("a:", a,"tipo de variable:", typeof a);
console.log("b:", b,"tipo de variable:", typeof b);
console.log("resultado de la multiplicacion:", mutiplicacion, "tipo de variable:", typeof mutiplicacion);

