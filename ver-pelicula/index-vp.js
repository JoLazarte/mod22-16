/*
Crear una función puedeVerPelicula que tome 
como argumentos un número edad y un booleano 
tieneAutorizacion, y devuelva true 
si la persona está habilitada para ver 
la película o false si no. 
Sólo puede ver la película si: 
tiene 15 años o más, o tiene autorización 
de sus padres.

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true
*/
const edad = Number(prompt("Ingrese su edad"));

const tieneAutorizacion = prompt("¿Tiene autorización?");

const puedeVerPelicula = (age, boolean) => {
    if (age >= 15 || boolean == "sí") {
        return true;
    } else {
        return false;
    }
};

const miraPeli = puedeVerPelicula(edad, tieneAutorizacion);
if (miraPeli === true) {
    //...(miraPeli) {...} funciona 
    //console.log("Puede mirar la película");
    alert("Puede mirar la película");
} else {
    //console.log("No puede ver película");
    alert("No puede ver película");
}; 

