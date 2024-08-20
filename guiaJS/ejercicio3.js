function calcularAumento(nombre, salario, categoria) {
    let porcentajeAumento;
    switch (categoria.toUpperCase()) {
        case 'A':
            porcentajeAumento = 0.15;
            break;
        case 'B':
            porcentajeAumento = 0.30;
            break;
        case 'C':
            porcentajeAumento = 0.10;
            break;
        case 'D':
            porcentajeAumento = 0.20;
            break;
        default:
            return "Categoría no válida";
    }

    const aumento = salario * porcentajeAumento;
    const nuevoSalario = salario + aumento;

    console.log("Datos del empleado:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento: $${aumento.toFixed(2)}`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}

/* Aqui los datos */
calcularAumento("Juan Pérez", 1000, "A");
calcularAumento("María Gómez", 1500, "B");
calcularAumento("Carlos Rodríguez", 2000, "C");
calcularAumento("Ana Martínez", 1800, "D");