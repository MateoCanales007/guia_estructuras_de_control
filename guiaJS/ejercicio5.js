function calcularDescuento() {
    const car = document.getElementById('car').value;
    let precio = 0;
    let descuento = 0;

    switch (car) {
        case 'FORD FIESTA':
            precio = 20000;
            descuento = 5;
            break;
        case 'FORD FOCUS':
            precio = 25000; 
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            precio = 30000;
            descuento = 20;
            break;
        default:
            precio = 0;
            descuento = 0;
    }

    const descuentoAplicado = (precio * descuento) / 100;
    const precioFinal = precio - descuentoAplicado;

    document.getElementById('resultado').innerText = `El coche seleccionado es: ${car}, el precio original es: $${precio}, el descuento aplicado es: ${descuento}%, y el precio final es: $${precioFinal.toFixed(2)}`;
}
