window.onload = function() {
    // Obtener el username y score actuales desde localStorage
    var username = localStorage.getItem('username') || 'Anónimo';
    var score = parseInt(localStorage.getItem('score')) || 0;

    // Obtener el ranking guardado en localStorage o inicializarlo como un array vacío si no existe
    var rankingStr = localStorage.getItem('ranking');
    var ranking = [];
    
    if (rankingStr) {
        try {
            ranking = JSON.parse(rankingStr);
        } catch (e) {
            console.error('Error al parsear el ranking del localStorage:', e);
            ranking = [];
        }
    }

    // Verificar si el username ya existe en el ranking
    var existingUserIndex = ranking.findIndex(entry => entry.username === username);

    if (existingUserIndex !== -1) {
        // Si el usuario ya existe y tiene un mejor puntaje, actualizar su puntaje
        if (ranking[existingUserIndex].score < score) {
            ranking[existingUserIndex].score = score;
        }
    } else {
        // Si el usuario no existe en el ranking, agregarlo
        ranking.push({ username: username, score: score });
    }

    // Ordenar el ranking por puntaje de mayor a menor
    ranking.sort((a, b) => b.score - a.score);

    // Guardar el ranking actualizado en localStorage
    localStorage.setItem('ranking', JSON.stringify(ranking));

    // Actualizar la tabla del ranking
    var table = document.querySelector('table tbody');
    table.innerHTML = ''; // Limpiar el contenido actual de la tabla

    ranking.forEach((entry, index) => {
        var newRow = table.insertRow(-1); // Insertar una nueva fila al final
        newRow.insertCell(0).innerHTML = index + 1; // Establecer el rango (número de fila)
        newRow.insertCell(1).innerHTML = entry.username;
        newRow.insertCell(2).innerHTML = entry.score;
    });
};
