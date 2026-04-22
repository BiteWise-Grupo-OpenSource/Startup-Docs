document.addEventListener("DOMContentLoaded", function () {
  const preguntas = document.querySelectorAll(".faq-question");

  preguntas.forEach((btn) => {
    btn.addEventListener("click", () => {
      const respuesta = btn.nextElementSibling;

      // Alternar visibilidad
      if (respuesta.style.display === "block") {
        respuesta.style.display = "none";
      } else {
        respuesta.style.display = "block";
      }
    });
  });
});