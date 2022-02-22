/*

6) Crear una función que calcule si un numero es es divisible por 5. Si es divisible debe retornar true; sino debe retornar false.

*/
const userNumber = Number(prompt("Ingrese un numero"));

function division() {
  if (userNumber % 5 === 0 && userNumber > 0) {
    alert(true);
  } else {
    alert(false);
  }
}

division();
