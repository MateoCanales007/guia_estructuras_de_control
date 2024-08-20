const esMayorDeEdad = (edad) => {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
};

/* Aqui poner la edad */
const edad = 17;
console.log(esMayorDeEdad(edad))