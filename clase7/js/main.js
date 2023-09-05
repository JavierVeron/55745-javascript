// Definimos un algoritmo sumador del 1 al 10
/* let total = 0; //0+1=>1/1+2=>3/3+3=>6

for (let i=1; i<=10; i++) {
    total += i;
    console.log(total);
}

console.log(total); */

// Abstraer el algoritmo en una función donde va a recibir un valor inicial y final para sumar los valores
/* alert("El resultado es: " + sumarRango(108, 10));

function sumarRango(valorInicial, valorFinal) {
    let total = 0;

    for (let i=valorInicial; i<=valorFinal; i++) {
        total += i;
    }

    return total;
} */


// Funciones de orden superior
// Ejemplo #1 - Declaramos una función que recibe un valor y devuelve una función
/* function mayorQue(valor) {
    return m => m > valor; //Devuelve una función
}

let mayorQue5 = mayorQue(5); // m => m > 5;
console.log(mayorQue5);
let var1 = mayorQue5(10); // 10 => 10 > 5; //true
let var2 = mayorQue5(3); // 3 => 3 > 5; //false
let var3 = mayorQue5(5); // 5 => 5 > 5; //false
console.log(var1);
console.log(var2);
console.log(var3); */

// Ejemplo #2
/* function asignarOperacion(tipo) {
    if (tipo == "suma") {
        return (param1, param2) => param1 + param2;
    } else if (tipo == "resta") {
        return (param1, param2) => param1 - param2;
    } else if (tipo == "multi") {
        return (param1, param2) => param1 * param2;
    } else {
        return (param1, param2) => param1 / param2;
    }
}

let suma = asignarOperacion("suma"); //(a, b) => a + b;
let multiplicacion = asignarOperacion("multi"); //(a, b) => a * b;
let resultado = suma(10, 20) // (10, 20) => 10 + 20 ==> 30
console.log("El resultado es: " + resultado);
let calculo = multiplicacion(10, 20); //(10, 20) => 10 * 20;
console.log("El resultado es: " + calculo); */


// Declarar una función que va a recibir como parámetro un array y otra función
/* function porCadaUno(arrayDeDatos, funcion) { 
    for (const elemento of arrayDeDatos) {
        funcion(elemento);
    }
}

const numeros = [1, 2, 3, 4]; */

//porCadaUno(numeros, console.log);

// Declarar la función acumular
/* let total = 0;

function acumular(valor) {
    total += valor;
}

porCadaUno(numeros, acumular);
alert(total); */

// Ejemplo #3
/* let duplicados = [];

porCadaUno(numeros, (valor) => {
    duplicados.push(valor * 2)
});

console.log(duplicados); */


// Métodos de búsqueda y transformación
// Foreach => Recorrer arrays
/* const nombres = ["Nicolas", "Laura", "Juan", "Yanina"];

nombres.forEach(item => {
    console.log(item);
}) */

// Find => Devuleve el primer elemento que coincida con la condición, sino devuelve undefined
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:700, stock:10}, //7000
    {id:2, nombre:"Pepsi", precio:650, stock:9}, //5850
    {id:3, nombre:"Manaos", precio:500, stock:8}, //4000
    {id:4, nombre:"Cunnington", precio:550, stock:7} //3850
];

/* const bebida1 = bebidas.find(item => item.nombre == "Pepsi");
const bebida2 = bebidas.find(item => item.precio < 800);
const bebida3 = bebidas.find(item => item.precio > 500 && item.precio < 700);
console.log(bebida1);
console.log(bebida2);
console.log(bebida3); */

// Filter => Devuleve un nuevo Array resultante por la condición, sino devuelve un array vacío
/* const bebidasBaratas = bebidas.filter(item => item.precio < 600);
const bebidasCaras = bebidas.filter(item => item.precio > 1600);
console.log(bebidasBaratas);
console.log(bebidasCaras); */

// Some => Devuelve true o false en caso de que encuentre un elemento que cumpla la condición
/* const existe = bebidas.some(item => item.nombre == "Manaos");
const existe2 = bebidas.some(item => item.nombre == "Vichy");
console.log(existe);
console.log(existe2); */

// Map => Crea un nuevo array con la posibilidad de transformar/modificar los valores de los elementos
/* const nuevaBebidas = bebidas.map(item => ({id:item.id, name:item.nombre.toUpperCase(), price:item.precio*1.2}));
console.log(nuevaBebidas); */

// Reduce => Suma cada uno de los elementos de un array y devuelve un único valor
/* const total = bebidas.reduce((acumulador, item) => acumulador + item.precio, 0);
const total2 = bebidas.reduce((acumulador, item) => acumulador + item.precio * item.stock, 0);
console.log("La suma total de bebidas es: $" + total);
console.log("La suma total de bebidas es: $" + total2); */

// Sort => Sirve para ordenar los elementos de un array
/* const numeros = [40, 1, 200, 5];
numeros.sort((pepe1, pepe2) => (pepe1 - pepe2)); // Ordenar en forma ascendente
console.log(numeros);
numeros.sort((pepe1, pepe2) => (pepe2 - pepe1)); // Ordenar en forma ascendente
console.log(numeros);
bebidas.sort((item1, item2) => (item1.precio - item2.precio));
console.log(bebidas); */

// Ordenando por nombre (alfabético)
/* bebidas.sort((item1, item2) => {
    if (item1.nombre > item2.nombre) {
        return 1;
    } else if (item1.nombre < item2.nombre) {
        return -1
    } else {
        return 0;
    }
});
console.log(bebidas); */


// Ejemplo aplicado
const nombreBebidas = bebidas.map(item => item.nombre);
const nombreBebidas2 = bebidas.map(item => ({nombre:item.nombre, stock:item.stock}));
console.log(nombreBebidas);
console.log(nombreBebidas2);