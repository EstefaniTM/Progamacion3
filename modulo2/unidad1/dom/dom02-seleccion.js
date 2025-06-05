const titulo = document.getElementById('titulo');
console.log(titulo.textContent);
const notas = document.getElementsByClassName('nota');
Array.items(notas).forEach(n => console.log(n.textContent)); 
const items = document.querySelectorAll('.item');
items.forEach(el => console.log(el.textContent));