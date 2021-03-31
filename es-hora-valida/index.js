/*
//DESPELOTE de intento para resolver este ejercicio,
//que FUNCIONA (pero la resolución de Matías es mejor...):
const esHoraValida = (hora) => {
    const arr = hora.split("");
    console.log(arr);
    
if (arr.length == 5
    && arr[0] >= 0 && arr[0]<= 1
    && arr[1] >= 0 && arr[1] <= 9
    && arr[3] >= 0 && arr[3] <= 5
    && arr[4] >= 0 && arr[4] <= 9
    || (arr[0] == 2 && arr[1] >= 0 && arr[1] <= 4
        && arr[3] >= 0 && arr[3] <= 5
        && arr[4] >= 0 && arr[4] <= 9)) {
        
        return true;
    
    } else {
       
        return false;
    
}};  
*/

// A continuación, resolución correcta del ejercicio:
const esHoraValida = (hora) => {
    //El string que se ingrese como parametro "hora"
    //debe tener el siguiente formato: "Hh:Mm"
    //Primero, transformo el string (hora) en un array
    //con .split
    //En este ejemplo, divido (hora) en la variable
    //horas por un lado, y la variable minutos, 
    //por el otro, por medio de los (:) que conforman 
    //el formato de (hora). 
    //Por eso, con hora.split(":"), estoy pidiendole al
    //método .split que me separe (hora) por medio de los (:),
    //es decir, que convierta el string (hora) en un 
    //array (horasYminutos), con dos elementos. Uno está antes 
    //de los (:), guardado en la variable horas, el otro está 
    //después de los (:), guardado en la variable minutos.
    const horasYminutos = hora.split(":");
    console.log(horasYminutos); //Esto es solo para 
    //visualizar el array (horasYminutos) en consola,
    //que se verá como ej: ["12,30"]
    //La coma separa los elementos del array.
    //Anteriormente, en vez de la coma, venían los (:)
    //del formato original del string (hora) (hora = "Hh:Mm").
    const horas = Number(horasYminutos[0]);
    const minutos = Number(horasYminutos[1]);
    //Con Number(), me aseguro que los dos elementos
    //(index 0 e index 1) del array (horasYminutos) 
    //sean numeros.
    //A continuación debo asegurarme que horas esté
    //entre 0 y 24, y que minutos esté entre 0 y 59.
    //Para eso utilizo el If:
    // if (horas >= 0 && horas <= 24 
    //      && minutos >= 0 && minutos <= 59) {
    //      return true;
    //} else {
    //    return false;
    //}
    //El If anterior se puede sintetizar como:
    return horas >= 0 && horas <= 24 
        && minutos >= 0 && minutos <= 59;
    
};

console.log(esHoraValida('19:60')); // false
console.log(esHoraValida('21:69')); // false
console.log(esHoraValida('19:60')); // false
console.log(esHoraValida('12:23')); // true
console.log(esHoraValida('12:65')); // false
console.log(esHoraValida('28:05')); // false
console.log(esHoraValida('00:00')); // true
console.log(esHoraValida('24:60')); // false
console.log(esHoraValida('20:60')); // false
console.log(esHoraValida('24:23')); // true
console.log(esHoraValida('20:59')); // true
console.log(esHoraValida('24:59')); // true
console.log(esHoraValida('24:65')); // false
console.log(esHoraValida('29:60')); // false
console.log(esHoraValida('50:60')); // false
console.log(esHoraValida('000000'));// false
console.log(esHoraValida('Mandy')); // false
console.log(esHoraValida('Hh:Mm')); // false
console.log(esHoraValida('-00:60'));// false

console.log(esHoraValida('37:60')); // false

