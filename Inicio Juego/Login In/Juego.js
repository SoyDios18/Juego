document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre de usuario almacenado en localStorage
    var username = localStorage.getItem('username');
    // Obtener el puntaje almacenado en localStorage
    var score = localStorage.getItem('score');

    // Actualizar el contenido de los elementos HTML con el nombre de usuario y el puntaje
    document.getElementById('username').textContent = username || 'Anónimo';
    document.getElementById('score').textContent = score || '0';
    
    // Si el nombre de usuario y el puntaje están definidos, guardarlos en localStorage
    if (username && score) {
        localStorage.setItem('username', username);
        localStorage.setItem('score', score);
    }
});

function iniciarJuego() {
    // Aquí deberías colocar el código para iniciar tu juego
    // Por ejemplo:
    // 1. Obtener el canvas
    // 2. Configurar el contexto
    // 3. Iniciar la lógica del juego (bucles de juego, eventos, etc.)
    // 4. Actualizar el puntaje y cualquier otra interfaz de usuario necesaria
    
    // Una vez que el juego está iniciado, oculta el botón de inicio
    document.getElementById('start').style.display = 'none';
}

// Agregar un event listener al botón "Iniciar"
document.getElementById('start').addEventListener('click', function() {
    document.getElementById('gameContainer').style.display = 'block';
    iniciarJuego(); // Llama a la función para iniciar el juego
    
    // Agregar un event listener al botón "Comenzar"
    document.getElementById('New').addEventListener('click', function() {
        // Redirigir a otra página al hacer clic en el botón "Comenzar"
        window.location.href = 'prueba.html'; // Cambia 'nueva_pagina.html' por la URL de la página a la que quieres redirigir
    });
});

