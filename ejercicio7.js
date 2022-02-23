/*

7) Crear una función que transforme una string en formato capital. El formato capital es aquel en el que las primeras letras comienza con mayúsculas.
Ejemplo: hola mundo => Hola Mundo
Ejemplo: soy Otro ejemplo => Soy Otro Ejemplo
Ejemplo: por si todavía no queda claro => Por Si Todavía No Queda Claro

*/

// EJEMPLO DE COMO TRANSFORMAR A LETRA CAPITAL LA PRIMERA LETRA DE UNA PALABRA SOLA

/* 
function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);    // -->el slice se usa asi (para la palabra word): "word.slice(1) daria ord, es decir, corta desde la posición 1 en adelante (incluyendola)"
}

console.log(capFirst("felix feliz"));
*/

let mySentence = "alguna frase de ejemplo";

function capFirst() {
  const words = mySentence.split(" "); // Split uso para transformar string a array y si coloco ('') separa letra por letra pero si coloco (' ') separa palabra por palabra.

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" "); // .map se usa para recorrer el array words (el cual creé y almacene en la variable de la linea anterior). Entonces le digo que a la primera letra [0] de cada palabra la la ponga en mayuscula y al resto la deje igual (con el slice) y despues que vuelva todo ese array a un string con el join.
}

const resultado = capFirst();
console.log(resultado);
