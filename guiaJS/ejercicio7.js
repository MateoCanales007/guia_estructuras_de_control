const readline = require('readline');

// interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let sumaPares = 0;
let contador = 0;

function solicitarNumero() {
    if (contador < 10) {
        rl.question(`Ingresa el número ${contador + 1}: `, (numero) => {
            numero = parseInt(numero);
            numeros.push(numero);

            // Contar negativos y positivos
            if (numero < 0) {
                negativos++;
            } else if (numero > 0) {
                positivos++;
            }

            // Contar múltiplos de 15
            if (numero % 15 === 0) {
                multiplosDe15++;
            }

            // Sumar números pares
            if (numero % 2 === 0) {
                sumaPares += numero;
            }

            contador++;
            solicitarNumero();
        });
    } else {
        console.log(`Cantidad de valores negativos: ${negativos}`);
        console.log(`Cantidad de valores positivos: ${positivos}`);
        console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
        console.log(`Valor acumulado de los números pares: ${sumaPares}`);
        rl.close();
    }
}

solicitarNumero();

