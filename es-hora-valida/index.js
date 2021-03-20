const esHoraValida = (hora="HH:mm") => {
    if (hora.length > 5 && hora.length < 4) {
        return "Formato inválido";
    } const separarFormato = hora.split(":");

};

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true