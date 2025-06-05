console.log("Condicionales");
console.log("1. If");
temperatura = 35;
if (temperatura > 30) {
    console.log("Hace calor");
}
console.log("if else");
usuariologado = true;
if (usuariologado) {
    console.log("Usuario logado");
} else {
    console.log("inicia sesion");
}

console.log("if else if");
nota = 9;
if (nota >= 10) {
    console.log("Aprobado");
}
else if (nota >= 7) {
    console.log("Regular");
}
else {
    console.log("Reprobado");
}

console.log("if anidado");
edad = 18;
if (edad >= 18) {
    console.log("Mayor de edad");
    if (edad >= 65) {
        console.log("Puede conducir");
    } else {
        console.log("No puede conducir");
    }
}else {
    console.log("Menor de edad");
}


console.log("if con operadores logicos");
let esEstudiante = true;
let tieneDescuento = true;
if (esEstudiante && tieneDescuento) {
    console.log("Descuento aplicado");
}
esAdmin = true;
esEditor = true;
if (esAdmin || esEditor) {
    console.log("Puede editar contenido");
}