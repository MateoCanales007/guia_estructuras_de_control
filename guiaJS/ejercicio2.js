function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
  const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
  
  console.log("Resultados:");
  console.log("Nombre:", nombre);
  console.log("Carnet:", carnet);
  console.log("Nota Final:", notaFinal.toFixed(2));
}

/* Datos */
calcularNotaFinal("Juan Pérez", "A12345", /* Examen */80, /* Tareas */90, /* Asistencia */100, /* Investigacion */85);