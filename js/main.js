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