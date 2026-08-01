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
const tarjeta = document.getElementById("vista-previa");
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
    

    tarjeta.innerHTML = `<h3>Vista previa de tu tarjeta</h3>

                        <div style="background-image: url('img/background_tarjeta_generada_v1.png'); background-position: center; background-size: cover; height: 320px; margin: 1.75rem 1rem; background-color: #F4F1EA; padding: 10px; padding-top: 40px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);" id="tarjeta-generada">
                            <h3 style="text-align: center; color: #0D1B2ACC;"> <span style="line-height: 2.5rem;  font-size: 0.9rem;">Memoria Activa</span> <br><span style="line-height: 0.1rem; font-size: 2rem;">50</span> <br> <span style="line-height: 0.5rem; font-size: 0.8rem;">AÑOS</span> <br> MEMORIA, <br> VERDAD Y JUSTICIA</h3> <br> 
                            
                            <div style="display: flex; flex-direction: column; justify-content: space-between; height: 40%;">
                                <p class="card-quote" style="font-family: var(--fuente-titulos);, Courier, monospace; text-align: center; color: #094880B3;">&ldquo;</p>
                                <p id="frase-conmemorativa" style="color: #094880D9; font-weight: 500; text-align: center; font-size: 0.80rem;  padding: 0 15px;">${mensajeLimpio}</p>
                                <p id="nombre-conmemorativo" style="text-align: center; color: #094880D9; font-weight: 500; font-size: 0.90rem;"><span style="font-weight: 900;">-</span>${nombreLimpio}</p>
                            </div>
                        </div> 

                        <div id="botones-vista-previa">
                            <button id="btnDescargar">Descargar PNG</button>
                            <button id="btnCopiarMsg">Copiar mensaje</button>
                            <button id="btnRecargar">Crear otra</button>                        
                        </div>`

    formTarjeta.reset();
    alertaNombre.style.display = "none";
    alertaMensaje.style.display = "none";
});