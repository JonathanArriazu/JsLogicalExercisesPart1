/*

8) Crear una función que tome una array de números y devuelva cuál es el número más grande de la array.
Ejemplo: [45, 53, 88, 21, 11, 87, 66] => Debe retornar 88

*/

let numeros = [45, 53, 88, 21, 11, 87, 66, 100];

function getMaxNumber() {
  return Math.max(...numeros);
}

const resultado = getMaxNumber();
console.log(resultado);
