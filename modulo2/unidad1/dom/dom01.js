console.log(document.head);
console.log(document.body);
console.log(document.body.children);
const notas = document.getElementsByClassName("notas");
Array.from(notas).forEach(n=>console.log(n.textContent));

const item = document.querySelectorAll("item");
item.forEach(elemenyo=>console.log(elemenyo.textContent));

const titulo = document.getElementById('titulo');
console.log("elemento titulo",titulo);

const mensaje = document.getElementById("mensaje");
console.log(mensaje);
mensaje.textContent = "se a actualizado el h2";
mensaje.style.color = "red";

const enlace = document.getElementById("link");
console.log(enlace);
enlace.setAttribute("href", "https://www.google.com");
link.textContent = "www.google.com";

document.addEventListener('DOMContentLoaded',()=>
{
    console.log(document.head); // Acceso al head
    console.log(document.body); // Acceso al body
    console.log(document.body.children); // Acceso a los hijos del body
    const notas = document.getElementsByClassName("notas"); // Acceso a los elementos con la clase "notas"
})

