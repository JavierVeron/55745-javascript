// Array de nombres
/* const nombres = ["Luca", "Juan", "María", "Valeria"];
console.log(nombres);
console.log(...nombres); // Utilizo el operador spread, para mostrar cada uno de los elementos de mi array
console.log(nombres[0], nombres[1], nombres[2], nombres[3]); */

// Operador Spread para buscar máximos y mínimos en un array de números
/* const numeros = [10, 98, -20, 0, 50];
console.log(numeros);
console.log(Math.max(...numeros));
console.log(Math.min(...numeros)); */

// Como crear un array
/* const nombres1 = ["Juan", "María", "Carlos"];
const nombres2 = ["Laura", "Soledad"];
const nombres3 = nombres1.concat(nombres2);
console.log(nombres3);
const nombres4 = [...nombres1, ...nombres2, ...nombres3];
const nombres5 = [...nombres3];
console.log(nombres4);
console.log(nombres5); */

/* let nombres6 = nombres2;
nombres2.push("Juan");
console.log(nombres2);
console.log(nombres6); */

/* let valor1 = 10;
let valor2 = valor1; // Guarda el valor por copia
valor1 = 20;
console.log(valor1);
console.log(valor2); */

/* const nombres1 = ["ana", "juan", "maria"];
const nombres2 = nombres1; // Guardo la referencia del array de la const nombres1
nombres1.push("carlos");
console.log(nombres1);
console.log(nombres2); */

/* const nombres3 = [...nombres1]; //Creo un nuevo Array utilizando el operador spread donde desparrama los elementos del array original
nombres1.push("Pepe");
console.log(nombres3); */


// Operador Spread en Objetos
/* const bebida = {id:1, nombre:"Coca Cola", precio:750};
const bebida2 = bebida; // Guardo la referencia del objeto de la const bebida2
bebida.precio = 800;
console.log(bebida2);

const bebida3 = {...bebida}; // Creo un nuevo Objeto utilizando el operador Spread donde desparrama las propiedas del objeto original
console.log(bebida3);
bebida.precio = 750;
console.log(bebida);
console.log(bebida3); */

/* const usuario1 = {
    nombre:"Juan Paleari",
    edad:25,
    curso:"JavaScript"
}

const usuario2 = {...usuario1};
console.log(usuario1);
usuario2.edad = 27
console.log(usuario2);
const usuario3 = {
    ...usuario2,
    curso: "React JS",
    email: "juan.paleari@gmail.com",
    edad: 28
}
console.log(usuario3); */


// Rest parameters
function mostrar(...numero) {
    console.log(numero);
}

function sumar(...numeros) {
    return numeros.reduce((acumulador, item) => acumulador += item, 10);
}

/* mostrar(10, 20)
mostrar(1, 2, 3, 4, 5)
mostrar("hola", "que tal", "cómo estás?"); */
console.log("Suma: " + sumar(20, 100, 200));