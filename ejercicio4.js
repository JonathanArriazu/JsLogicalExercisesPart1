/*

4) Crear una función que tome dos strings y retorne un booleano. Si las dos strings tienen la misma cantidad de caracteres, deberá retornar true; en el otro caso deberá retornar false.

*/

let word1 = String(prompt("Ingrese una palabra"));
let word2 = String(prompt("Ingrese otra palabra"));

function equalWords() {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

const newVariable = equalWords();
console.log(newVariable);
