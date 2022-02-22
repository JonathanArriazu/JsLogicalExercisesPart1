/*

5) Crear una función que tome una string y la de vuelta, muestre la palabra la revés.
Ejemplo: hola => Debe retornar aloh.


*/

function invertirPalabra(string) {
  return string.split("").reverse().join(""); // se pone "" vacio para ingresar espacio entre cada letra de la plabra, si se coloca " " se genera espacio entre cada una de las palabras (esto serviria mas para dar vuelta una frase y no una sola palabra)
}

const resultado = prompt("Ingresa palabra");
console.log(invertirPalabra(resultado));
