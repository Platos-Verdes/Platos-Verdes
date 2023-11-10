$(document).ready(function() {
    $(".cuadrado").on("click", function() {
        // Agregar la clase de animación cuando se hace clic
        $(this).addClass("scale-up-center");
        
        // Establecer un temporizador para quitar la clase de animación después de que termine
        setTimeout(function() {
            $(".cuadrado").removeClass("scale-up-center");
        }, 400); // 400 milisegundos (0.4 segundos) deben coincidir con la duración de la animación
    });
});