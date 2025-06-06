const msg = document.getElementById('mensaje');
msg.textContent = "se a actualizado el h2";
msg.style.color = "red";
const link = document.getElementById("link");
link.setAttribute("href", "https://www.google.com");
link.classList.add('boton');