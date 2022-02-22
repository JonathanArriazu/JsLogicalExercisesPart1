/*

7) Crear una función que transforme una string en formato capital. El formato capital es aquel en el que las primeras letras comienza con mayúsculas.
Ejemplo: hola mundo => Hola Mundo
Ejemplo: soy Otro ejemplo => Soy Otro Ejemplo
Ejemplo: por si todavía no queda claro => Por Si Todavía No Queda Claro

*/

// EJEMPLO DE COMO TRANSFORMAR A LETRA CAPITAL LA PRIMERA LETRA DE UNA PALABRA SOLA

/* function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);    // -->el slice se usa asi (para la palabra word): "word.slice(1) daria ord, es decir, corta desde la posición 1 en adelante (incluyendola)"
}

console.log(capFirst("felix feliz"));*/

// EJEMPLO DE COMO TRANSFORMAR A LETRA CAPITAL LA PRIMERA LETRA DE CADA UNA DE LAS PALABRAS DE UNA ORACIÓN

/* const mySentence = "hola como estan todos";
const words = mySentence.split(" ");  //--> Para separar cada una de las palabras de la oración.

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase + words[i].substring(1);
}

words.join(" "); */

function toCapital(str) {
  const words = str.split(" ");
  return words.map((word) => word[0].toUppercase() + word.slice(1)).join(" "); // No se xqe esta linea da error
}

const longStr = "la manera mas rapida de saltar un muro";

toCapital(longStr);
