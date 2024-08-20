function calcularDescuento() {
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    const precio = parseFloat(document.getElementById('precio').value);
    let descuento = 0;

    if (origen.toLowerCase() === 'palma') {
        switch (destino.toLowerCase()) {
            case 'la costa del sol':
                descuento = 5;
                break;
            case 'panchimalco':
                descuento = 10;
                break;
            case 'puerto el triunfo':
                descuento = 15;
                break;
            default:
                descuento = 0;
        }
    }

    const descuentoAplicado = (precio * descuento) / 100;
    const precioFinal = precio - descuentoAplicado;

    document.getElementById('resultado').innerText = `El destino seleccionado es: ${destino}, el precio original es: $${precio.toFixed(2)}, el descuento aplicado es: ${descuento}%, y el precio final es: $${precioFinal.toFixed(2)}`;
}
