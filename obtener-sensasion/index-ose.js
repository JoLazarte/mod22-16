const temperatura = Number(prompt("Ingrese un valor de temperatura"));

const obtenerSensasion = (valor) => {
    if (valor < 0) {
        alert("¡Está helando!");
    } else if (valor >= 0 && valor < 15) {
        alert("Hace frío.");
    } else if (valor >= 15 && valor < 25) {
        alert("Está lindo.");
    } else if (valor >= 25 && valor < 30) {
        alert("Hace calor.");
    } else if (valor >= 30) {
        alert("¡Hace mucho calor!");
    } 
};

obtenerSensasion(temperatura);