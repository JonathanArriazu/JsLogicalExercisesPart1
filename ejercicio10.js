/*

10) Convertir una array a una string. Una función tomará una array de strings y se convertirá en una única string.

*/

let array = ["una", "frase", "cualquiera"];

function stringConverter() {
  return array.join(" ");
}

const resultado = stringConverter();
console.log(resultado);
