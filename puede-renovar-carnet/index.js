/*
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests === true && 
        tieneMultasImpagas === false && 
        pagoImpuestos === true) {
        return true;
    } else {
        return falso;
    }
};
*/
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => pasoTests && 
        tieneMultasImpagas === false && 
        pagoImpuestos;

console.log(puedeRenovarCarnet(true, true, true));
console.log(puedeRenovarCarnet(true, true, false)); 
console.log(puedeRenovarCarnet(true, false, true)); 
console.log(puedeRenovarCarnet(true, false, false)); 
const personaX = puedeRenovarCarnet(false, true, true); 
console.log(personaX);
let personaY = puedeRenovarCarnet(false, true, false); 
console.log(personaY);
personaY = puedeRenovarCarnet(false, false, true);
console.log(personaY);
personaY = puedeRenovarCarnet(false, false, false);
console.log(personaY);