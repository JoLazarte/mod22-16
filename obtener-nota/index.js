const obtenerNota = (numero) => {
    if (numero < 6 ) {
        return "desaprobado";
    } else if (numero >= 6 && numero < 7) {
        return "regular";
    } else if (numero >= 7 && numero < 8) {
        return "bueno";
    } else if (numero >= 8 && numero < 10) {
        return "muy bueno";
    } else if (numero == 10) {
        return "exelente";
    } else if (numero < 0 || numero > 10) {
        return "Puntaje inválido.";
    } else {
        return "Puntaje inválido."
    }
};

console.log(obtenerNota(7));
console.log(obtenerNota(9.6));
console.log(obtenerNota(12));

