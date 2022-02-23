/*

3) Crear una función que transforme la cantidad de días en años.
Ejemplo: 555 => Debe retornar 1
Ejemplo: 3650 => Debe retornar 10

*/

let days = Number(prompt("Ingrese numeros de dias para transformar a años"));

function daysToYears() {
  let toYears = days / 365;
  return toYears;
}

const newVariable = daysToYears();
console.log(newVariable);
