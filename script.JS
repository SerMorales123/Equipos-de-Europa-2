document.addEventListener("DOMContentLoaded", () => {
    let contGrande = document.getElementById("grande-container");
    let puntos = document.querySelectorAll(".punto");

    puntos.forEach((punto, i) => {
        punto.addEventListener("click", () => {
            let posicionContenedor = -20 * i;
            contGrande.style.transform = `translateX(${posicionContenedor}%)`;

            // Resetear los puntos
            puntos.forEach(p => p.classList.remove("punto-activo"));

            // Activar el punto seleccionado
            punto.classList.add("punto-activo");
        });
    });
});
