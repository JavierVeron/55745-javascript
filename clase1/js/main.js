// Comentario de una sola línea
/* Una línea
Otra línea */
/* Otro comentario => Shift + Alt + a */

// Variables
/* let unaVariable; //Declarar una variable
unaVariable = "LAURA NO ESTÁ!"; //Asignar el texto LAURA NO ESTÁ a la variable unaVariable
//let unaVariable = "LAURA NO ESTÁ!"; // Esto es equivalente. Declarar y asignar el texto a la variable unaVariable

let valor1 = 1000; //Esto es un Number o un número entero
let valor2 = "Nahuel"; //Esto es un String va entre comillas
const dolar = 605 + valor1; //Las constantes se definen 1 sola vez, y no se puede volver a redefinir

console.log(valor1);
console.log(valor2);
console.log(dolar);

//valor1 = "Laura";
valor2 = 50.75; //Esto es un valor Number con decimales (los decimales van con .) También se los conocen como Float (Flotantes)
//dolar = 625;
let valorDolar = (dolar + valor1 + valor2) * 1.1;

console.log(valor1);
console.log(valor2);
console.log(dolar);
console.log(valorDolar); */


// Operaciones Básicas Numéricas
/* let numeroA = 10;
let numeroB = 20;
const numeroC = 30;

// SUMA
let resultadoSuma = numeroA + numeroB;
console.log("SUMA: " + resultadoSuma); // El + va a concatener el string con el número

// RESTA
let resultadoResta = numeroB - numeroA;
console.log("RESTA: " + resultadoResta);

// MULTIPLICACIÓN
let resultadoMulti = numeroA * numeroB;
console.log("MULTIPLICACIÓN: " + resultadoMulti);

// DIVISIÓN
let resultadoDiv = numeroC / numeroB;
console.log("DIVISIÓN: " + resultadoDiv); */


// Operaciones Básicas de Texto
/* let textoA = "Curso";
let preposicion = "de"
let textoB = "JavaScript";
let espacio = " ";
let costo = 60000;

// Concatenación
alert(textoA + " " + preposicion + " " + textoB);
alert(textoA + espacio + preposicion + espacio + textoB);
alert(textoA + espacio + preposicion + espacio + textoB + " $" + costo + " Pesos!");
console.log(textoB + " => $" + costo); */


// Prompts
/* let nombre = prompt("Ingrese su Nombre:");
let apellido = prompt("Ingrese su Apellido:");
let nombreCompleto = nombre + " " + apellido;
alert("Tu Nombre Completo es: " + nombreCompleto); */

//let peso = parseInt(prompt("Ingrese su Peso:")); //Los prompts guardan los datos en forma STRING. Debería convertir ese String a un valor Entero
/* let peso = parseFloat(prompt("Ingrese su Peso:")); //Los prompts guardan los datos en forma STRING. Debería convertir ese String a un valor Float (con decimales)
peso = peso + 2;
alert("Tu peso es: " + peso); */

// Ejemplo de console.log
/* let peso = parseFloat(prompt("Ingrese su Peso:"));
console.log("Su peso es: " + peso + " kg."); */

