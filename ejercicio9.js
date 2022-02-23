/*

9) Remover el primer caracter de una palabra. Crear una función que tome una string y retorne la misma palabra sin su primer caracter.
Ejemplo: apple => pple

*/

let word = "apple";

function firstLettterRemover() {
  return word.slice(1);
}

const resultado = firstLettterRemover();
console.log(resultado);
