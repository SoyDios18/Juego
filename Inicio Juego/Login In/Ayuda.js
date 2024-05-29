document.getElementById('download-btn').addEventListener('click', function() {
    // Crear un enlace oculto
    var link = document.createElement('a');
    link.href = 'Manual.pdf'; // Ruta al archivo PDF
    link.download = 'Manual.pdf'; // Nombre del archivo que se descargará

    // Añadir el enlace al DOM, hacer clic en él y luego eliminarlo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
