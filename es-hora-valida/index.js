
const esHoraValida = (hora) => {
    const arr = hora.split("");
    console.log(arr);
    

if (arr.length == 5
    && arr[0] >= 0 && arr[0]<= 1
    && arr[1] >= 0 && arr[1] <= 9
    && arr[3] >= 0 && arr[3] <= 5
    && arr[4] >= 0 && arr[4] <= 9
    || (arr[3] == 6 && arr[4] == 0
        && arr[0] >= 0 && arr[0]<= 1
        && arr[1] >= 0 && arr[1] <= 9)
    || (arr[0] == 2 && arr[1] >= 0 && arr[1] <= 4
        && arr[3] >= 0 && arr[3] <= 5
        && arr[4] >= 0 && arr[4] <= 9)
    || (arr[3] == 6 && arr[4] == 0
        && arr[0] >= 0 && arr[0]<= 2
        && arr[1] >= 0 && arr[1] <= 4)) {
        
        return true;
    
    } else {
       
        return false;
    
}};   
console.log(esHoraValida('19:60')); // true
console.log(esHoraValida('12:23')); // true
console.log(esHoraValida('12:65')); // false
console.log(esHoraValida('28:05')); // false
console.log(esHoraValida('00:00')); // true
console.log(esHoraValida('24:60')); // true
console.log(esHoraValida('20:60')); // true
console.log(esHoraValida('24:23')); // true
console.log(esHoraValida('20:59')); // true
console.log(esHoraValida('24:59')); // true
console.log(esHoraValida('24:65')); // false
console.log(esHoraValida('29:60')); // false
console.log(esHoraValida('50:60')); // false
console.log(esHoraValida('000000')); // false
console.log(esHoraValida('Mandy')); // false
console.log(esHoraValida('Hh:Mm')); // false
console.log(esHoraValida('-00:60')); // false


