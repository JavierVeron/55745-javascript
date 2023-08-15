// Estructura IF
/* alert("Buenos días!")

if (true) {
    alert("Esto se va a ejecutar!")
}

if (false) {
    alert("Esto NO SE va a ejecutar!")
}

alert("Chau!"); */


// Comparación se hace con el signo ==
// Ejemplo #1
/* let cocaCola = 900;

if (cocaCola > 700) { //700 == 700 => true
    alert("VAS A PODER COMPRAR COCA!");
}

if (cocaCola > 800) { //700 == 800 => false (no se ejecuta)
    alert("NO VAS A PODER COMPRAR COCA!");
} */

// Ejemplo #2
/* let edad = parseInt(prompt("Ingrese su Edad:"));

if (edad >= 18) {
    alert("Vas a poder comprar ALCOHOL!");
} */

// Ejemplo #3
/* let tePortasteMal = "si";

if (tePortasteMal == "SI") {
    alert("SERÁS CASTIGADA!");
} else {
    alert("ESTÁ TODO PIOLA!");
} */


// Comparación de valores booleanos (true o false)
/* let tePortasteMal = false;

if (tePortasteMal) {
    alert("SERÁS CASTIGADA!");
} else {
    alert("ESTÁ TODO PIOLA!");
} */


// Validando un valor del prompt
//let nombre = prompt("Ingrese un nombre:").trim();
//let nombre = "Mati";

/* if (nombre.length < 2) {
    alert("Error! Debe ingresar un nombre!");
} else {
    alert("Hola, " + nombre);
} */

/* if (nombre.length >= 2) {
    alert("Hola, " + nombre);
} else {
    alert("Error! Debe ingresar un nombre!");
} */


// Ejemplo de IF... else
//let temperatura = 9;

/* if (temperatura <= 10) {
    alert("HACE FRÍO!");
} else if (temperatura <= 20) {
    alert("Está fresquito!");
} else if (temperatura <= 30) {
    alert("Está caluroso!");
} else {
    alert("NO SALGAS! QUEDATE EN TU CASA!");
} */


// Validando Valores Booleanos
/* let numero = 4;
let esMayorQue5 = (numero > 5); //true

if (esMayorQue5) {
    alert("Es mayor que 5!");
} else {
    alert("NO, NO ES MAYOR QUE 5!");
} */


// Operadores lógicos
let numero1 = 20;
let numero2 = 10;

// Comparación igual == (compara valor)
/* if (numero1 == 10) {
    alert("Número 1 es igual a 10!");
} */

// Comparación estrictamente igual === (compara valor y tipo de dato)
/* if (numero1 === 10) {
    alert("Número 1 es estrictamente igual a 10!");
} */

// Operador distinto
/* if (numero1 != 20) {
    alert("Número 1 es distinto de 20!");
} */

// Operador estrictamente distinto (valor y tipo de dato)
/* if (numero1 !== 20) {
    alert("Número 1 es estrictamente distinto de 20!");
} */

// Operador AND && (Y)
// V y V => V 
// V y F => F
// F y V => F
// F y F => F

/* if ((numero1 > 10) && (numero2 > 10)) {
    alert("Se cumple ambas condiciones!")
} else {
    alert("No se cumplió la condición!")
} */

// Operador OR || (O)
// V o V => V 
// V o F => V
// F o V => V
// F o F => F

/* if ((numero1 > 10) || (numero2 > 10)) {
    alert("Se cumplío una condición!")
} else {
    alert("No se cumplió la condición!")
} */


// Operador NOT ! (no)
// !V => F
// !F => V

/* if (!(numero1 > 10)) {
    alert("Número 1 es mayor que 10!");
} */

// Doble Negación -- es igual al valor original
/* if (!(!(numero1 > 10))) {
    alert("Número 1 es mayor que 10!");
} */

// Ejemplo con Y
/* let nombre = prompt("Ingrese su Nombre:");
let apellido = prompt("Ingrese su Apellido:"); */

/* if ((nombre != "") && (apellido != "")) {
    alert("Su nombre completo es: " + nombre + " " + apellido);
} else {
    alert("Error! Debe ingresar su Nombre y Apellido!");
} */

/* if ((nombre == "") && (apellido == "")) {
    alert("Error! Debe ingresar su Nombre y Apellido!");
} else {
    alert("Su nombre completo es: " + nombre + " " + apellido);
} */


// Nombre Ingresado
//let nombreIngresado = prompt("Ingrese su Nombre");

// Ejemplo Original
/* if ((nombreIngresado == "YANI") || (nombreIngresado == "yani")) {
    alert("Hola Yani!");
} else {
    alert("Error! El nombre ingresado no es Yani!");
} */

// Ejemplo mejorado
/* if (nombreIngresado.toUpperCase() == "YANI") {
    alert("Hola Yani!");
} else {
    alert("Error! El nombre ingresado no es Yani!");
} */

// Ejemplo con OR
/* if (((nombreIngresado != "") && (nombreIngresado == "YANI")) || (nombreIngresado == "yani")) {
    alert("Hola Yani!");
} */

/* if ((nombreIngresado != "") && ((nombreIngresado == "YANI") || (nombreIngresado == "yani"))) {
    alert("Hola Yani!");
} */


// Ejemplo aplicado
let peso = parseFloat(prompt("Ingrese su Peso:"));
let altura = parseFloat(prompt("Ingrese su Altura:"));
let imc = peso / (altura * altura);

let resultado = "IMC: " + imc.toFixed(2) + "%" + "\nEstado de Salud: ";

// Proceso de validación del IMC
if (imc < 18.5) {
    alert(resultado + "Peso inferior al normal");
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    alert(resultado + "Normal");
} else if ((imc >= 25) && (imc <= 29.9)) {
    alert(resultado + "Peso superior al normal!");
} else {
    alert(resultado + "Obesidad!")
}


