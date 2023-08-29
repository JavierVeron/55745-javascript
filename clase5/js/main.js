// Objetos
/* const bebida = {id:1, nombre:"Coca Cola", precio:950, litros:2.25};
let nombreBebida = prompt("Ingrese el nombre de la gaseosa:");
let precioBebida = 750;
let litrosBebida = 1.5;
const bebida2 = {id:2, nombre:nombreBebida, precio:precioBebida, litros:litrosBebida};
console.log(bebida2); */

// Declarar un Objeto
/* const persona = {id:1, nombre:"Luca Barbano", edad:23, direccion:"Av. San Martín 1500"}; */
//alert(`Hola, ${persona.nombre} tu edad es ${persona.edad}`)

// Accediendo a las propiedades de un objeto
/* console.log(persona.nombre); // Opción #1
console.log(persona["edad"]); // Opción #2 */

// Modificar y/o Agregar propiedades a un Objeto
/* persona.nombre = "Angeles Pini"; // Acá modifiqué la propiedad nombre
persona.edad = 30; // Acá modifiqué la propiedad edad
persona.ciudad = "CABA"; // Acá agregué la propiedad ciudad
console.log(persona); */

// EASTER EGG - Plantilla literal
/* alert("Hola, soy " + persona.nombre);
alert(`Hola, soy ${persona.nombre}
Mi edad es ${persona.edad * 2}`); //plantilla literal o template string `` */


// Constructores
/* function Persona(nombrePersona, edadPersona, calleAltura) {
    this.nombre = nombrePersona;
    this.edad = edadPersona;
    this.calle = calleAltura;
    this.estadoCivil = "Soltero";
}

const persona1 = new Persona("Fernando Fuertes", 25, "Av. Libertador 2500");
const persona2 = new Persona(1000, "Nahuel Lopez", "Av. Libertador 2500");
console.log(persona1); 
console.log(persona2);
persona1.estadoCivil = "Casada";
console.log(persona1);
console.log(persona2);

console.log("Nombre: " + persona1.nombre);
console.log("Edad: " + persona1.edad); */

// Declaro un objeto
const auto = {model:"208", brand:"Peugeot", year:2023};

const persona = {nombre:"Yanina", edad:25, dni:11223345};

// Declaro un Constructor
/* function Vehiculo(automovil) {
    this.modelo = automovil.model;
    this.marca = automovil.brand;
    this.anio = automovil.year;
    this.estado = "Nuevo";
    this.km = 0;
}

function Patentamiento(persona, auto) {
    this.nombre = persona.nombre;
    this.dni = persona.dni;
    this.auto = auto
}

// Crear una nueva instancia de Objeto a partir de otro Objeto
const car1 = new Vehiculo(auto);

console.log(auto);
console.log(car1);

const patetamiento1 = new Patentamiento(persona, auto);
console.log(patetamiento1); */


// Métodos en los objetos
/* let texto = "JavaScript";
let nuevoTexto = texto.replace("Java", "JABA");

console.log("Longitud: " + texto.length);
console.log("MAYÚSCULAS: " + texto.toUpperCase());
console.log("minúsculas: " + texto.toLowerCase());
console.log(nuevoTexto); */


// Construyendo un Objeto con métodos
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.darNombre = () => {
        return "Hola, soy" + this.nombre;
    }
    this.darEdad = () => {
        return "Mi edad es " + this.edad; 
    }
} */

//const persona1 = new Persona("Juan Perez", 25, "Av. San Martín 1500");
/* console.log("Nombre: " + p1.nombre);
console.log(p1.darNombre()); */

// Propiedad in => Permite validar si existe una propiedad en un objeto
/* console.log("nombre" in persona1); //true
console.log("apellido" in persona1); //false
console.log("pepe" in persona1); //false
console.log("edad" in persona1); //true */

/* if (persona1.nombre == "Juan Perez") {
    alert("Sí, es Juan Perez!")
} else {
    alert("Noup");
} */
 
// For..in => Permite recorrer todas las propiedades de un Objeto
/* for (const clave in persona1) {
    console.log("Clave: " + clave + " - Valor: " + persona1[clave]);
} */


// Creando una Clase Persona y agreando métodos
/* class Persona {
    constructor(nombre, email, celular) {
        this.nombre = nombre.toUpperCase();
        this.email = email;
        this.celular = celular;
    }

    darNombre() {
        return "Hola, soy " + this.nombre;
    }

    darCelular() {
        return "+54" + this.celular;
    }
}

const persona1 = new Persona("Pablo Coca", "pablo.coca@gmail.com", 1122334455);
const persona3 = new Persona("Dhiani");
/* console.log(persona1);
console.log("Email: " + persona1.email);
persona1.email = "pablo_coca@gmail.com";
console.log("Email: " + persona1.email);
console.log(persona1.darNombre());
console.log(persona1.darCelular()); */
/* console.log(persona3);
console.log(persona3.darCelular()); */


// Ejemplo aplicado
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
        this.descuento = 10;
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21;
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100)
    }

    productoVendido() {
        this.vendido = true;
    }
}

const producto1 = new Producto("Coca Cola", 800);
const producto2 = new Producto("Pepsi", 750);
producto1.aplicarIVA();
producto2.aplicarIVA();
producto1.aplicarDescuento();
producto1.productoVendido();
console.log(producto1);
console.log(producto2);