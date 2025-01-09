// LA PARTE DEL MENU DESPLEGABLE EN MOVIL
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const menuOpciones = document.getElementById("menuOpciones");

    menuToggle.addEventListener("click", () => {
        const isVisible = menuOpciones.style.display === "block";
        menuOpciones.style.display = isVisible ? "none" : "block";
    });

    //Cerrar el menú al hacer clic fuera de él
    document.addEventListener("click", (event) => {
        if (!menuOpciones.contains(event.target) && !menuToggle.contains(event.target)) {
            menuOpciones.style.display = "none";
        }
    });
});

// PARTE DEL CARRUSEL
const usuarios = [
    {
        nombre: "Juan",
        imagen: "https://via.placeholder.com/100?text=Juan",
        texto: "Hola, soy Juan. ¡Encantado de conocerte!"
    },
    {
        nombre: "Maria",
        imagen: "https://via.placeholder.com/100?text=María",
        texto: "Soy María y me encanta la programación."
    },
    {
        nombre: "Carlos",
        imagen: "https://via.placeholder.com/100?text=Carlos",
        texto: "Hola, soy Carlos. Disfruto aprender cosas nuevas jadvn j bnbn dvjn dhuhfuhbvfvhf hsdavhhguoashvhasuodhvsah suhadouvhasovhasouhasudhv duhgasudhaouhaughqdhiasdhgisduhg"
    }
];

let indiceActual = 0;
function actualizarCarrusel() {
    const usuario = usuarios[indiceActual];
    document.getElementById('titulo-usuario').textContent = usuario.nombre;
    document.getElementById('imagen-usuario').src = usuario.imagen;
    document.getElementById('texto-usuario').textContent = usuario.texto;
}

function usuarioSiguiente() {
    indiceActual = (indiceActual + 1) % usuarios.length;
    actualizarCarrusel();
}
function usuarioAnterior() {
    indiceActual = (indiceActual - 1 + usuarios.length) % usuarios.length;
    actualizarCarrusel();
}
// Inicializar el carrusel
actualizarCarrusel();

let intervaloCarrusel = setInterval(usuarioSiguiente, 6000);
// Pausar el intervalo al interactuar manualmente
document.querySelector(".botones").addEventListener("click", () => {
    clearInterval(intervaloCarrusel); // Detiene el intervalo
});

// PARTE DEL BOTON DE ME GUSTA
const boton = document.querySelector('.corazonBoton');
// Agrega un evento para manejar el clic
boton.addEventListener('click', function () {
    // Alterna la clase 'clicado' en el botón
    boton.classList.toggle('clicado');
});