function calcularPromedios() {
    const edadesManana = obtenerEdades('manana');
    const edadesTarde = obtenerEdades('tarde');
    const edadesNoche = obtenerEdades('noche');

    const promedioManana = calcularPromedio(edadesManana);
    const promedioTarde = calcularPromedio(edadesTarde);
    const promedioNoche = calcularPromedio(edadesNoche);

    let mensaje = `Promedio de edades del turno mañana: ${promedioManana.toFixed(2)}<br>`;
    mensaje += `Promedio de edades del turno tarde: ${promedioTarde.toFixed(2)}<br>`;
    mensaje += `Promedio de edades del turno noche: ${promedioNoche.toFixed(2)}<br>`;

    const mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    if (mayorPromedio === promedioManana) {
        mensaje += "El turno con el mayor promedio de edades es el turno mañana.";
    } else if (mayorPromedio === promedioTarde) {
        mensaje += "El turno con el mayor promedio de edades es el turno tarde.";
    } else {
        mensaje += "El turno con el mayor promedio de edades es el turno noche.";
    }

    document.getElementById('resultado').innerHTML = mensaje;
}

function obtenerEdades(turnoId) {
    const inputs = document.querySelectorAll(`#${turnoId} input`);
    const edades = [];
    inputs.forEach(input => {
        const edad = parseInt(input.value);
        if (!isNaN(edad)) {
            edades.push(edad);
        }
    });
    return edades;
}

function calcularPromedio(edades) {
    const suma = edades.reduce((acc, edad) => acc + edad, 0);
    return suma / edades.length;
}
