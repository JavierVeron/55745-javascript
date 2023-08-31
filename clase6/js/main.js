// Repaso de objetos
/* const objeto = {id:1, nombre:"Coca Cola", precio:700};
console.log(objeto);

// Crear un objeto (con una clase) a partir de un objeto (como parámetro)
const ubicacion = {nombreCalle:"Av. San Martin", alturaCalle:1500, codigoPostal:1667, localidad:"San Miguel", provincia:"Buenos Aires"};

class Persona {
    constructor(nombre, datosUbicacion) {
        this.nombrePersona = nombre;
        this.calle = datosUbicacion.nombreCalle;
        this.altura = datosUbicacion.alturaCalle;
        this.codigoPostal = datosUbicacion.codigoPostal;
    }

    mostrarDatos() {
        return "Nombre: " + this.nombrePersona + "\n" + "Domicio: " + this.calle + " " + this.altura + " (" + this.codigoPostal + ")";
    }
}

const personaNueva = new Persona("Agustina Lamgoblia", ubicacion);
console.log(personaNueva);
personaNueva.nombre = "Juan";
let resultado = personaNueva.mostrarDatos()
alert(resultado); */

// Arrays
const nombres = ["Nahuel", "Tomás", "Agustina", "María", "Juan"];
/* console.log(nombres);
console.log(nombres[2]); //Accediendo al elemento número 3, que está en la posición 2
console.log("Total: " + nombres.length); //Length propiedad que me devuelve el total de elementos de mi Array */

// Modificar los valores de un Array
nombres[4] = "Angeles";
console.log(nombres);

// Recorriendo Arrays
// Recorriendo con for
/* for (let i=0; i<5; i++) {
    alert(nombres[i]);
} */

/* for (let i=0; i<nombres.length; i++) {
    alert(nombres[i]);
} */

// Recorriendo los elementos de un Array con For..Of
/* for (const nombre of nombres) {
    alert(nombre)
} */


// Métodos de Arrays
// PUSH => Agrega un elemento al final del array
/* let nuevoNombre = "Iván";
nombres.push(nuevoNombre);
nombres.push("Juan");
nombres.push(prompt("Ingrese nuevo Nombre:"));
nombres.push("Juan", "Pedro");
nombres.push("Juan Pedro");
console.log(nombres); */

// UNSHIFT => Agregar un elemento al comienzo del array
/* nombres.unshift("Micaela");
console.log(nombres); */

// POP => Elimina y devuelve el último elemento del array
/* let nombre = nombres.pop();
console.log(nombres);
console.log("Nombre eliminado: " + nombre); */

// SHIFT => Elimina y devuelve el primer elemento del array
/* let nombre = nombres.shift();
console.log(nombres);
console.log("Nombre eliminado: " + nombre); */

// SPLICE => Elimina 1 o más elemento de un array
/* nombres.splice(2, 2); //Primer parámetro => se posiciona en el lugar, segundo parámetro => indica cantidad de elmentos a eliminar
console.log(nombres); */

// JOIN => Convierte mi array a String, y define un caracter de separación entre elementos
/* let nombreSalida = nombres.join(" | ");
let nombreSalida2 = nombres[0] + " | " + nombres[1] + " | " + nombres[2];
console.log(nombreSalida);
console.log(nombreSalida2);
console.log(nombres.join(" * ")); */

// CONCAT => Concatenar 2 arrays y devuelve un nuevo Array resultante
/* const perros = ["Cambai", "Tomás", "Mora"];
const gatos = ["Amy", "Benita"];
//const mascotas = perros.concat(gatos);
const mascotas = gatos.concat(perros);
console.log(mascotas); */

// SLICE => Crea un nuevo array con los elementos especificados en la posición indicada
/* const nuevosNombres = nombres.slice(2, 3);
console.log(nuevosNombres); */

// INDEX OF => Indica la posición del elemento encontrado, si no lo encuentar devuelve -1
/* let nombreBusqueda = prompt("Ingrese el nombre a buscar");
let pos = nombres.indexOf(nombreBusqueda);

if (pos > -1) {
    alert("El nombre buscado: " + nombreBusqueda + " se encuentra en la posición: " + pos);
} else {
    alert("Error! No se encuentra el nombre buscado!");
} */

// INCLUDES => Devuelve true si encuentra el elemento, sino devuelve false
/* let nombreBusqueda = prompt("Ingrese el nombre a buscar");
let existe = nombres.includes(nombreBusqueda);

if (existe) {
    alert("El nombre buscado: " + nombreBusqueda + " se encuentra en la Array!");
} else {
    alert("Error! No se encuentra el nombre buscado!");
} */

// REVERSE => Invierte el orden de los elementos del array
/* nombres.reverse();
console.log(nombres); */

// Ejemplo aplicado #1
/* const arrayNombres = [];
const topeMaximo = 5;

do {
    let nombre = prompt("Ingrese un Nombre:").toUpperCase();
    arrayNombres.push(nombre);
} while (arrayNombres.length != topeMaximo);

const nuevoArrayNombres = arrayNombres.concat(["Nahuel", "Angeles"]);
alert(nuevoArrayNombres.join("\n")); */

// Ejemplo aplicado #2
/* const eliminarNombre = (nombre) => {
    //console.log("Valor ingresado: " + nombre);

    let pos = nombres.indexOf(nombre);
    //console.log("Posición: " + pos);

    if (pos > -1) {
        nombres.splice(pos, 1);
        //console.log("Elimino un elemento");
    }
}

let nombreAEliminar = prompt("Ingrese el Nombre a eliminar:");
eliminarNombre(nombreAEliminar);
console.log(nombres); */


// Array de Objetos
/* const gaseosa1 = {id:1, nombre:"Coca Cola", precio:700};
const bebidas = [gaseosa1, {id:2, nombre:"Pepsi", precio:650}];
bebidas.push({id:3, nombre:"Manaos", precio:450});
console.log(bebidas); */

// Accediendo a los elementos de un Array
/* console.log(bebidas[0]);
//console.log(`Bebida: ${bebidas[1].nombre} $${bebidas[1].precio}`);

let nombreBebida = bebidas[2].nombre;
let precioBebida = (bebidas[2].precio * 1.1).toFixed(2);
alert(nombreBebida + " $" + precioBebida); */

// Recorriendo mi array de objetos con for..of
/* for (const bebida of bebidas) {
    let nombreBebida = bebida.nombre;
    let precioBebida = (bebida.precio * 1.1).toFixed(2);
    alert(nombreBebida + " $" + precioBebida);
} */


// Ejemplo aplicado #3
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21;
    }
}

const arrayProductos = [];
const prod1 = new Producto("Coca Cola", 700);
const prod2 = new Producto("Pepsi", 650);
const prod3 = new Producto("Manaos", 450);
arrayProductos.push(prod1);
arrayProductos.push(prod2);
arrayProductos.push(prod3);
console.log(arrayProductos);

for (const bebida of arrayProductos) {
    bebida.aplicarIVA();
}

console.log(arrayProductos);
