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
        texto: "Hola, soy Juan. ¡Encantado de conocerte!",
        meGusta: 0,
        leGusta: false
    },
    {
        nombre: "Maria",
        imagen: "https://via.placeholder.com/100?text=María",
        texto: "Soy María y me encanta la programación.",
        meGusta: 0,
        leGusta: false
    },
    {
        nombre: "Carlos",
        imagen: "https://via.placeholder.com/100?text=Carlos",
        texto: "Hola, soy Carlos. Disfruto aprender cosas nuevas jadvn j bnb dhuhfuhbvfvhf hsdavhhguoashvhasuodhvsah suhadouvhasovhasouhasudhv duhgasudhaouhaughqdhiasdhgisduhg",
        meGusta: 0,
        leGusta: false

    }
];

// PARTE CARRUSEL 1
let indiceActual = 0;
function actualizarCarrusel() {
    const usuario = usuarios[indiceActual];
    document.getElementById('titulo-usuario').textContent = usuario.nombre;
    document.getElementById('imagen-usuario').src = usuario.imagen;
    document.getElementById('texto-usuario').textContent = usuario.texto;

    // Obtener el botón del corazón
    const botonCorazon = document.querySelector('.corazonBoton');
    
    // Actualizar apariencia del botón según el estado de "leGusta"
    botonCorazon.classList.toggle('clicado', usuario.leGusta);

    // Eliminar eventos previos para evitar duplicados
    botonCorazon.replaceWith(botonCorazon.cloneNode(true));
    const nuevoBotonCorazon = document.querySelector('.corazonBoton');
    
    // Asignar evento de clic dinámico
    nuevoBotonCorazon.addEventListener('click', function () {
        usuario.leGusta = !usuario.leGusta; // Alternar estado
        usuario.meGusta += usuario.leGusta ? 1 : -1; // Incrementar o decrementar
        nuevoBotonCorazon.classList.toggle('clicado', usuario.leGusta); // Actualizar apariencia
    });
}

// Función para avanzar al siguiente usuario
function usuarioSiguiente() {
    indiceActual = (indiceActual + 1) % usuarios.length;
    actualizarCarrusel();
}

// Función para retroceder al usuario anterior
function usuarioAnterior() {
    indiceActual = (indiceActual - 1 + usuarios.length) % usuarios.length;
    actualizarCarrusel();
}

// Parte carrusel 2
let indiceActual2 = 0;
function actualizarCarrusel2() {
    const usuario = usuarios[indiceActual2];

    document.querySelector('.titulo-usuario2').textContent = usuario.nombre;
    document.querySelector('.imagen-usuario2').src = usuario.imagen;
    document.querySelector('.texto-usuario2').textContent = usuario.texto;

    const botonCorazon = document.querySelector('.corazonBoton2');
    botonCorazon.classList.toggle('clicado', usuario.leGusta);

    botonCorazon.replaceWith(botonCorazon.cloneNode(true));
    const nuevoBotonCorazon = document.querySelector('.corazonBoton2');

    nuevoBotonCorazon.addEventListener('click', function () {
        usuario.leGusta = !usuario.leGusta;
        usuario.meGusta += usuario.leGusta ? 1 : -1;
        nuevoBotonCorazon.classList.toggle('clicado', usuario.leGusta);
    });
}

function usuarioSiguiente2() {
    indiceActual2 = (indiceActual2 + 1) % usuarios.length;
    actualizarCarrusel2();
}

function usuarioAnterior2() {
    indiceActual2 = (indiceActual2 - 1 + usuarios.length) % usuarios.length;
    actualizarCarrusel2();
}

// Inicializar carruseles
actualizarCarrusel();
actualizarCarrusel2();

let intervaloCarrusel = setInterval(usuarioSiguiente, 6000);
let intervaloCarrusel2 = setInterval(usuarioSiguiente2, 6000);

document.querySelector(".botones").addEventListener("click", () => {
    clearInterval(intervaloCarrusel);
    clearInterval(intervaloCarrusel2);
});