
// Selecciona el botón de hamburguesa
const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal
const menu = document.querySelector(".menu-horizontal");

const activarSOS = document.getElementById("boton-sos");

// Al hacer clic en el botón de hamburguesa
if(btn && menu){
  btn.addEventListener("click", () => {

    menu.classList.toggle("active");
  
  });
}

if (activarSOS) {
    activarSOS.addEventListener("click", function(e) {
        e.preventDefault(); // detiene la navegación automática
        alert("La alerta ha sido enviada");
        window.location.href = activarSOS.href;
    });
}
