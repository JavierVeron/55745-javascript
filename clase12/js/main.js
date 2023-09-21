// Sugar Syntax
/* let numero = 10;
console.log(numero);
numero = numero + 1;
console.log("Opción #1: " + numero);
numero += 1;
console.log("Opción #2: " + numero);
numero++;
console.log("Opción #3: " + numero);
numero--;
console.log("Número: " + numero); */

// Algoritmo original
/* let precioCocaCola = 700;

if (precioCocaCola > 800) {
    alert("El precio se fue a las nubes!");
} else {
    alert("La Coca Cola está en precio!");
} */

// Operador Ternario Simple
/* let precioCocaCola = 900;

precioCocaCola > 800 ? alert("El precio de la Coca Cola se fue a las nubes!") : alert("La Coca Cola está en precio!"); */

// Operador Ternario dentro de otro Ternario
/* let precioCocaCola = 550;

precioCocaCola > 800 ? alert("El precio de la Coca Cola se fue a las nubes!") : precioCocaCola >= 600 ? alert("La Coca Cola está en precio!") : alert("La Coca Cola está muy barata... es para desconfiar!"); */

// Otro Ejemplo - Algoritmo original
const persona = {
    nombre:"Lisandro Guerra",
    edad:16
}

/* let mePorteMal;

if (persona.edad >= 18) {
    mePorteMal = true;
} else {
    mePorteMal = false;
}

if (mePorteMal) {
    alert(persona.nombre + " SERAS CASTIGADO!");
} else {
    alert(persona.nombre + " BUENO... ERAS CHICO!");
} */

// Versión simplificada
/* let mePorteMal = persona.edad >= 18 ? true : false;
//mePorteMal ? alert(persona.nombre + " SERAS CASTIGADO!") : alert(persona.nombre + " BUENO... ERAS CHICO!");
alert(persona.nombre + (mePorteMal ? " SERAS CASTIGADO!" : " BUENO... ERAS CHICO!")); */


// Operador AND &&
/* let carrito = []; */

/* if (carrito.length === 0) {
    console.log("El carrito está vacío!");
} */

/* carrito.length === 0 && console.log("El carrito está vacío!");

const fechaRegistro = persona.edad >= 18 && new Date();
console.log(fechaRegistro); */

// Operador OR ||
/* console.log(0 || "Error! Falsy");
console.log(10 || "Error! Falsy");
console.log(-20 || "Error! Falsy");
console.log(null || "Error! Falsy");
console.log(undefined || "Error! Falsy");
console.log("Hola Mundo" || "Error! Falsy");
console.log("" || "Error! Falsy");
console.log(NaN || "Error! Falsy");
console.log(true || "Error! Falsy");
console.log("true" || "Error! Falsy");
console.log(false || "Error! Falsy");
console.log("false" || "Error! Falsy"); */

/* const persona1 = {
    nombre:"Matias Zini",
    edad:25
};
const persona2 = null;

console.log(persona1 || "El usuario no existe!");
console.log(persona2 || "El usuario no existe!"); */


// Otro Ejemplo de OR
//localStorage.setItem("carrito", JSON.stringify([1, 2, 3]));
let carrito;
/* let carritoEnLS = JSON.parse(localStorage.getItem("carrito"));

if (carritoEnLS) {
    carrito = carritoEnLS;
} else {
    carrito = [];
} */

// Versión simplificada con OR
//carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// Versión simplificada con Operador Ternario
/* carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];

console.log(carrito); */

// Operador Nullish
/* console.log(0 ?? "Error! Falsy");
console.log(10 ?? "Error! Falsy");
console.log(-20 ?? "Error! Falsy");
console.log(null ?? "Error! Falsy");
console.log(undefined ?? "Error! Falsy");
console.log("Hola Mundo" ?? "Error! Falsy");
console.log("" ?? "Error! Falsy");
console.log(NaN ?? "Error! Falsy");
console.log(true ?? "Error! Falsy");
console.log("true" ?? "Error! Falsy");
console.log(false ?? "Error! Falsy");
console.log("false" ?? "Error! Falsy"); */


// Acceso condicional a una propiedad de un Objeto
/* const persona1 = null;

//console.log(persona1.nombre);

//console.log(persona1.nombre || "El usuario no existe!");
console.log(persona1?.nombre || "El usuario no existe!"); */


// Desestructuración
/* const persona1 = {
    nombre:"Ivan Gomez",
    edad:25,
    domicilio:"Av. San Mart{in 1500",
    ciudad:"Moreno",
    paises:["Argentina", "Uruguay"],
    bebidasPreferidas:[{id:1, nombre:"Coca Cola", precio:700}, {id:2, nombre:"Pepsi", precio:650}],
    telefonos:{
        casa:"1144455578",
        celular:"1156767890"
    }
} */

/* let nombre = persona1.nombre;
let edad = persona1.edad; */
/* let {nombre, edad, ciudad, paises, bebidasPreferidas, telefonos:{celular}} = persona1;
console.log("Mi nombre es " + nombre + " y mi edad es " + edad + " (" + ciudad + ")");
console.log(paises[1]);
console.log(bebidasPreferidas[0]);
console.log("Celular: " + celular); */

// Alias
/* const product = {itemId:10, itemName:"Coca Cola", itemPrice:700};
let {itemId:id, itemName:nombre, itemPrice:precio} = product;
console.log(id + "- " + nombre + " $" + precio); */


// Desestructurando un Objeto como parámetro
/* const curso = {id:1, nombre:"JavaScript", precio:50000, temas:"Variables, Estructuras de Control, Ciclos de Iteración, Funciones, etc"};

const desestructurar = (course) => {
    let {nombre, precio} = course;
    console.log("Curso: " + nombre + " - Precio: $" + precio);
}

const desestructurar2 = ({nombre, precio, temas}) => {
    console.log("Curso: " + nombre + " - Precio: $" + precio + " - Temas: " + temas);
}

desestructurar(curso);
desestructurar2(curso); */

// Ejemplo aplicado
/* window.addEventListener("click", ({x,y}) => {
    console.log("X: " + x + " - Y: " + y);
}) */


// Desestructuring en Arrays
const nombres = ["Matías", "Juan", "Soledad", "Luca", "Lisandro", "Tomas"];
console.log(nombres);
/* const [nombre1, nombre2, nombre3, a, b, c, d] = nombres;
console.log(nombre1);
console.log(nombre2);
console.log(nombre3);
console.log(a);
console.log(b);
console.log(c);
console.log(d); */

/* const [,,name1, name2, name3] = nombres;
console.log(name1);
console.log(name2);
console.log(name3); */

const [name1,,name2,,name3] = nombres;
console.log(name1);
console.log(name2);
console.log(name3);