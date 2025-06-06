//Elementos AddEventlistener
function mostrarAlerta() {
    alert("Hola, soy una alerta");
}
function agregarProducto() {
    const ul = document.getElementById
    ('listaproducto1')
    const li = document.createElement('li');
    li.textContent = "Producto 1";
    ul.appendChild(li);
}

document.getElementById('boton').addEventListener
    ('click', ()=>
    {
        alert("Hola, soy una alerta");
    }
    );  

document.getElementById('campo').addEventListener
('input', (e) =>
{
    console.log('escribiendo:', e.target.value);
})

document.getElementById('btnAgregar').addEventListener('click', () => {
        const ul = document.getElementById('listaproducto1');
        const li = document.createElement('li');
        li.textContent = "Producto 1";
        ul.appendChild(li);
    }
)