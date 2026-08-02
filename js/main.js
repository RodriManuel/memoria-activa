const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Esto le pone o le saca la clase 'active' al nav cada vez que haces clic
    navLinks.classList.toggle('active');
});


// Leer Más/Menos en los testimonios.
let limiteDeCaracteres = 144;
let citas = document.querySelectorAll(".cita");

citas.forEach(cita => {
    
    let blockquote = cita.closest("blockquote");
    
    let boton = blockquote?.nextElementSibling;

    if (boton && cita.textContent.length <= limiteDeCaracteres) {
        boton.style.display = "none";
    } else {
        let displayText = cita.textContent.slice(0, limiteDeCaracteres);
        let moreText = cita.textContent.slice(limiteDeCaracteres);
        cita.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn) {
    let cardBody = btn.parentElement;
    cardBody.querySelector(".dots").classList.toggle("hide");
    cardBody.querySelector(".more").classList.toggle("hide");

    btn.textContent == "Leer Más" ? btn.textContent = "Leer Menos" : btn.textContent = "Leer Más";
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
        alertMessage.style.color = "#FF0000";
        alertMessage.style.padding = "10px 0"
        alertMessage.style.border = "1px solid rgb(226, 6, 6, .75)";
        alertMessage.style.borderRadius = "6px";
        alertMessage.style.backgroundColor = "rgb(226, 6, 6, .35)";
        return;
    }

    alertMessage.textContent = `¡Gracias por adherirte, ${nombre}!`;
    alertMessage.className = "success";
    alertMessage.style.color = "#008000";
    alertMessage.style.padding = "10px 0"
    alertMessage.style.border = "1px solid rgb(4, 109, 4, .75)";
    alertMessage.style.borderRadius = "6px";
    alertMessage.style.backgroundColor = "rgb(4, 109, 4, .35)";
    formAdhesion.reset();
});