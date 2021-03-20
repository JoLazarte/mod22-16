const colorSemaforo = prompt("Ingrese un color del semáforo");

function puedeAvanzar(color) {
    if (color == "verde") {
        return true;
    } else if (color == "rojo" || color == "amarillo") {
        return false;
    } else {
        alert("Error: Color inválido");


    }
};

const miroSemaforo = puedeAvanzar(colorSemaforo);
if (miroSemaforo) {
    alert("Puede avanzar");
} else if (miroSemaforo === false) {
    alert("No puede avanzar");
} else {

};