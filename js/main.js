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
        alertaNombre.style.color = "#B71C1C";

        alertaMensaje.textContent = "*este campo es obligatorio";
        alertaMensaje.className = "error";
        alertaMensaje.style.color = "#B71C1C";

        alertaNombre.style.display = "inline";
        alertaMensaje.style.display = "inline";
        return;
    }
    
    if (nombreLimpio === "") {
        alertaNombre.style.display = "inline";
        alertaNombre.textContent = "*este campo es obligatorio";
        alertaNombre.className = "error";
        alertaNombre.style.color = "#B71C1C";
        return;
    }

    if (mensajeLimpio === "") {
        alertaMensaje.style.display = "inline";
        alertaMensaje.textContent = "*este campo es obligatorio";
        alertaMensaje.className = "error";
        alertaMensaje.style.color = "#B71C1C";
        return;
    }

    document.getElementById("nombre-conmemorativo").textContent = "-" + nombreLimpio;
    document.getElementById("frase-conmemorativa").textContent = mensajeLimpio;    
    

    formTarjeta.reset();
    alertaNombre.style.display = "none";
    alertaMensaje.style.display = "none";
});


const download = document.getElementById("btnDescargar")
//Descargador de Tarjeta
download.addEventListener("click", () => {
    html2canvas(tarjeta).then((canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "Tarjeta-Conmemorativa.png";
        link.click();
    });
});