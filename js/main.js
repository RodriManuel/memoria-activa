const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Esto le pone o le saca la clase 'active' al nav cada vez que haces clic
    navLinks.classList.toggle('active');
});


// Leer Más/Menos en los testimonios.
const limiteDeCaracteres = 144;
const citas = document.querySelectorAll(".cita");

citas.forEach(cita => {
    const blockquote = cita.closest("blockquote");
    const boton = blockquote?.nextElementSibling;

    // Si el texto es corto, ocultamos el botón
    if (boton && cita.textContent.length <= limiteDeCaracteres) {
        boton.style.display = "none";
    } else if (boton) {
        // Recortamos el texto e inyectamos los spans correspondientes
        const textoCompleto = cita.textContent;
        const displayText = textoCompleto.slice(0, limiteDeCaracteres);
        const moreText = textoCompleto.slice(limiteDeCaracteres);

        cita.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

// Función global para el botón "Leer Más"
function readMore(btn) {
    const cardBody = btn.parentElement;
    const dots = cardBody.querySelector(".dots");
    const more = cardBody.querySelector(".more");

    if (dots && more) {
        dots.classList.toggle("hide");
        more.classList.toggle("hide");

        btn.textContent = btn.textContent === "Leer Más" ? "Leer Menos" : "Leer Más";
    }
}


// Generador de tarjeta conmemorativa.
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const generar = document.getElementById("btnGenerar");
const tarjeta = document.getElementById("tarjeta-generada");
const alertaNombre = document.getElementById("alerta-input-nombre");
const alertaMensaje = document.getElementById("alerta-input-mensaje");
const formTarjeta = document.getElementById("form-tarjeta");

generar.addEventListener("click", () => {
    //Validación de los campos
    const nombreLimpio = nombre.value.trim();
    const mensajeLimpio = mensaje.value.trim();

    if (nombreLimpio === "" && mensajeLimpio === "") {
        alertaNombre.textContent = "*este campo es obligatorio";
        alertaNombre.className = "error";
        alertaNombre.style.color = "#FF0000";

        alertaMensaje.textContent = "*este campo es obligatorio";
        alertaMensaje.className = "error";
        alertaMensaje.style.color = "#FF0000";

        alertaNombre.style.display = "inline";
        alertaMensaje.style.display = "inline";
        return;
    }
    
    if (nombreLimpio === "") {
        alertaNombre.style.display = "inline";
        alertaNombre.textContent = "*este campo es obligatorio";
        alertaNombre.className = "error";
        alertaNombre.style.color = "#FF0000";
        return;
    }

    if (mensajeLimpio === "") {
        alertaMensaje.style.display = "inline";
        alertaMensaje.textContent = "*este campo es obligatorio";
        alertaMensaje.className = "error";
        alertaMensaje.style.color = "#FF0000";
        return;
    }

    document.getElementById("nombre-conmemorativo").textContent = "— " + nombreLimpio;
    document.getElementById("frase-conmemorativa").textContent = mensajeLimpio;    
    

    formTarjeta.reset();
    alertaNombre.style.display = "none";
    alertaMensaje.style.display = "none";
});


//Descargador de Tarjeta
const download = document.getElementById("btnDescargar")

download.addEventListener("click", () => {
    html2canvas(tarjeta).then((canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Tarjeta-Conmemorativa.png";
        link.click();
    });
});


// Validación del formulario de adhesión.
const formAdhesion = document.getElementById("adhesion-form");
const inputMail = document.getElementById("adhesion-mail");
const inputNombre = document.getElementById("adhesion-nombre");
const inputApellido = document.getElementById("adhesion-apellido");
const alertMessage = document.getElementById("adhesion-message");

formAdhesion.addEventListener("submit", (e) => {
    e.preventDefault();

    const mail = inputMail.value.trim();
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();

    if (nombre === "" || apellido === "" || mail === "") {
        alertMessage.textContent = "¡Llená todos los campos!";
        alertMessage.className = "error";
        alertMessage.style.color = "#dc3545 ";
        alertMessage.style.padding = "10px 0"
        alertMessage.style.border = "1px solid #dc3545";
        alertMessage.style.borderRadius = "6px";
        alertMessage.style.backgroundColor = "#f8d7da"; 
        return;
    }

    alertMessage.textContent = `¡Gracias por adherirte, ${nombre}!`;
    alertMessage.className = "success";
    alertMessage.style.color = "#198754";
    alertMessage.style.padding = "10px 0"
    alertMessage.style.border = "1px solid #198754";
    alertMessage.style.borderRadius = "6px";
    alertMessage.style.backgroundColor = "#d1e7dd";
    formAdhesion.reset();
});


// Lógica para el buscador de testimonios.
const buscador = document.getElementById("buscador");
const testimonios = document.querySelectorAll(".card");

buscador.addEventListener("input", () => {
    const textoABuscar = buscador.value.toLowerCase().trim();

    testimonios.forEach(testimonio => {
        // textContent lee todo el texto de la tarjeta (incluido el oculto en 'more')
        const textoTestimonio = testimonio.textContent.toLowerCase();

        // Solo alternamos la visibilidad de la tarjeta completa (.card)
        if (textoTestimonio.includes(textoABuscar)) {
            testimonio.style.display = '';
        } else {
            testimonio.style.display = 'none';
        }
    });
});