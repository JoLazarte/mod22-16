const numero = Number(prompt("Ingrese un número"));

/* function par_impar(num) {
    if ((num % 2) == 0) {
        alert("El número es par");
    } else if ((num % 2) !== 0) {
        alert("El número es impar");
    }
}; */

const par_impar = (num) => {
    if ((num % 2) == 0) {
        alert("El número es par");
    } else if ((num % 2) !== 0) {
        alert("El número es impar");
    }
};

par_impar(numero);