/*
const estaEnRango = (valor, numMin, numMax) => {
    if (valor >= numMin && valor <= numMax) {
        return true;
    } else {
        return false;
    }
}  
*/
const estaEnRango = (valor, numMin, numMax) => valor >= numMin && valor <= numMax;

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));   // true
console.log(estaEnRango(10, 1, 10));  // true
console.log(estaEnRango(12, 1, 10));  // false
console.log(estaEnRango(-3, 1, 10));  // false