//un array de estudiantes y cada estudiante nombre, edad y un array de notas.

const estudiantes = [{
    nombres: "Juan",
    edad: 12,
    notas: [20, 20, 20],
    promedio: 0
},
{
    nombres: "Maria",
    edad: 12,
    notas: [2, 12, 4],
    promedio: 0
},
{
    nombres: "Pedro",
    edad: 12,
    notas: [20, 12, 4],
    promedio: 0
},{
    nombres: "Maria",
    edad: 12,
    notas: [8, 12, 4],
    promedio: 0
},
{
    nombres: "jose",
    edad: 12,
    notas: [1, 12, 1],
    promedio: 0
},
]


for (estudiante of estudiantes){
    console.log(estudiante);
    
    suma = 0;
    for (nota in estudiante.notas){
        suma += nota;
    }
    console.log(suma);
    estudiante.promedio = (suma/estudiante.notas.length);

    if (estudiante.promedio <= 12) {
        console.log("El estudiante", estudiante.nombres, "No paso")}
    else {
        console.log("El estudiante", estudiante.nombres, "Paso")
    };
}











