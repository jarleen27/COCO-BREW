// ======================================
// ESPERAR A QUE CARGUE LA PÁGINA
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    // ======================================
    // MODO OSCURO
    // ======================================

    const botonModo = document.getElementById("modoOscuro");

    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");

        if (botonModo) {
            botonModo.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    }

    if (botonModo) {

        botonModo.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("modo", "oscuro");
                botonModo.innerHTML = '<i class="bi bi-sun-fill"></i>';

            } else {

                localStorage.setItem("modo", "claro");
                botonModo.innerHTML = '<i class="bi bi-moon-fill"></i>';

            }

        });

    }

    // ======================================
    // BOTONES COMPRAR
    // ======================================

    const botones = document.querySelectorAll(".comprar");

    botones.forEach(function (boton) {

        boton.addEventListener("click", function () {

            const producto = boton.getAttribute("data-producto");

            const texto = document.getElementById("productoSeleccionado");

            if (texto) {
                texto.textContent = producto;
            }

            const modalElemento = document.getElementById("pedidoModal");

            if (modalElemento) {

                const modal = new bootstrap.Modal(modalElemento);

                modal.show();

            }

        });

    });

    // ======================================
    // FORMULARIO CONTACTO
    // ======================================

    const formulario = document.getElementById("formularioContacto");

    if (formulario) {

        formulario.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("✅ Gracias por comunicarte con CocoBrew. Hemos recibido tu mensaje.");

            formulario.reset();

        });

    }

});