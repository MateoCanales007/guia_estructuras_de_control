const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// función para convertir celsius a fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
// categoria
function categoriaTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

rl.question('Ingresa la temperatura en Celsius: ', (celsius) => {
    celsius = parseFloat(celsius);
    const fahrenheit = celsiusAFahrenheit(celsius);
    const categoria = categoriaTemperatura(fahrenheit);

    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)}°F`);
    console.log(categoria);

    rl.close();
});
