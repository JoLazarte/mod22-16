const esConsonante = (letra) => letra == "b" || letra == "c" || letra == "d" ||
    letra == "f" || letra == "g" || letra == "h" ||
    letra == "i" || letra == "j" || letra == "k" ||
    letra == "l" || letra == "m" || letra == "n" ||
    letra == "ñ" || letra == "p" || letra == "q" ||
    letra == "r" || letra == "s" || letra == "t" ||
    letra == "v" || letra == "w" || letra == "x" ||
    letra == "y" || letra == "z";

console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true