function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let numero1 = 10; // Cambiar estos valores para probar
let numero2 = 20;


console.log("Primer número ingresado: " + numero1);
console.log("Segundo número ingresado: " + numero2);


let mayor = encontrarMayor(numero1, numero2);
console.log("El número mayor es: " + mayor);