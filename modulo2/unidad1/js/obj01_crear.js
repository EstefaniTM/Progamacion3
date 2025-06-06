//manipulacion de objetos
let alumno = {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 20,
    telefono: 912345678,
};

console.log(alumno);
//acceder a propiedades
console.log("Nombre: " + alumno.nombre);
console.log("nombre alumno: " + alumno["nombre"]);
//modificar propiedades
alumno.apellidos = "Gómez";
alumno["edad"] = 234;

console.log(alumno);
//incluir nueva propiedad
alumno.promedio = 8.5;
console.log(alumno);
delete alumno.promedio;
console.log(alumno);

alumnoClonado = {...alumno};
alumnoClonado.nombre = "Pedro";
alumnoClonado.apellidos = "García";
console.log(alumnoClonado);


//Multiplicar precio unitario * cantidad y sumarle iva y asignar el valor a subtotal

item = {
    precioUnitario: 100,
    cantidad: 2,
    iva: 3.4,
    nombre: "Cerveza",
    subtotal: 0
};
item.subtotal = (item.precioUnitario * item.cantidad) + item.iva;
console.log(item);

//Ejercicio 2 con for recorer lista de item
for (i in item) {
    console.log(item[i]);
}

//listrar las claves o propiedades del objeto
console.log(Object.keys(item));
//listar los valores del objeto
console.log(Object.values(item));

//metodo o funcion en el objeto
usuario = {
    nombre: "Juan",
    saludar: function () {
        console.log("Hola " + this.nombre);
    }
};
console.log(usuario.saludar());

//objetos anidados
categoria = {
    nombre: "Electrónica",
    productos: ["Televisor", "Radio", "Computadora", {cantidad: 3, marca: "LG"}],
    description: {
        capacidad: "1TB",
        tamaño: "1.5 pulgadas",
    }}