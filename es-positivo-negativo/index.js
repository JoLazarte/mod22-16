const esPositivoONegativo = (numero) => {
    if (numero < 0 && numero > -Infinity) {
        return "negativo";
    } else if (numero > 0 && numero < Infinity) {
        return "positivo";
    } else if (numero == 0) {
        return "Número neutro";
    }
};

console.log(esPositivoONegativo(3));  // 'positivo'
console.log(esPositivoONegativo(-5)); // 'negativo'
console.log(esPositivoONegativo(-0.2));  // 'negativo'
console.log(esPositivoONegativo(0.2)); // 'positivo'