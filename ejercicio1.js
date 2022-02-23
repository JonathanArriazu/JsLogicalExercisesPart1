/*
1) Crear una función que tome una array de números y retorne la suma de esos números.
Ejemplo: [1, 2, 3] // Debe retornar 6.


*/
let numeros = [1, 2, 3];

function sumarNumerosArreglo() {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

const newVariable = sumarNumerosArreglo();
console.log(newVariable);

/* ¿Esta bien usado el return? Previo a esto hice:

let numeros = [1, 2, 3];

function sumarNumerosArreglo() {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  console.log(suma);
}

sumarNumerosArreglo();

*/
