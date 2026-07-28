const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Esto le pone o le saca la clase 'active' al nav cada vez que haces clic
    navLinks.classList.toggle('active');
});


// Leer Más/Menos en los testimonios.
let limiteDeCaracteres = 192;
let citas = document.querySelectorAll(".cita");

citas.forEach(cita => {
    
    let blockquote = cita.closest("blockquote");
    
    let boton = blockquote?.nextElementSibling;

    if (boton && cita.textContent.length < limiteDeCaracteres) {
        boton.style.display = "none";
    }
})