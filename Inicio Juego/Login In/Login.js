document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        // Evita la recarga de la página
        event.preventDefault(); 

        // Obtener el valor del campo de contraseña
        var password = document.getElementById('password').value;
        
        // Obtener el valor del campo de nombre de usuario
        var username = document.getElementById('username').value;

        // Verificar si se ha ingresado una contraseña
        if(password.trim() === '') {
            // Mostrar un mensaje de error o realizar alguna acción
            alert('Por favor, ingrese una contraseña');
        } else {
            // Guardar el nombre de usuario en localStorage
            localStorage.setItem('username', username);
            // Si se ha ingresado una contraseña, redirigir al usuario a la página de inicio del juego
            window.location.href = 'Juego.html';
        }
    });
    
});
