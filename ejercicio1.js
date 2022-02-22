/*
1) Crear una función que tome una array de números y retorne la suma de esos números.
Ejemplo: [1, 2, 3] // Debe retornar 6.

*/

function sumarNumeroArreglo(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

console.log(sumarNumeroArreglo([1, 2, 3]));
