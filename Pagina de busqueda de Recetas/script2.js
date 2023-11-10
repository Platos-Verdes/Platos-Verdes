function applyAnimation(element) {
    // Agregar la clase de animación al elemento al hacer clic
    element.classList.add("scale-up-center");
  
    // Eliminar la clase de animación después de 0.4 segundos
    setTimeout(function() {
        element.classList.remove("scale-up-center");
    }, 400);
}