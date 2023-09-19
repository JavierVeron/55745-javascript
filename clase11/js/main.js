// Creando una localStorage //Quedan guardadas en el Navegador, no se eliminan (sino se elimina el Cache del Navegador)
/* localStorage.setItem("nombre", "Javier Verón"); 
localStorage.setItem("email", "javier.veron@gmail.com");
localStorage.setItem("edad", 42); */

// Sessions Storage //Quedan guardadas hasta que no se cierre la Pestaña o el Navegador
/* sessionStorage.setItem("nombre", "Javier Verón"); 
sessionStorage.setItem("email", "javier.veron@gmail.com");
sessionStorage.setItem("edad", 42); */


// Accediendo a las localStorages
/* let nombre = localStorage.getItem("nombre");
let edad = localStorage.getItem("edad");
document.getElementById("contenido").innerHTML = `Mi nombre es: ${nombre}<br>Edad: ${localStorage.getItem("edad")}`; */


// Reemplazando los valores de la localStorages
/* console.log("Email: " + localStorage.getItem("email"));
localStorage.setItem("email", "angeles.pini@gmail.com");
console.log("Email: " + localStorage.getItem("email")); */


// Recorriendo localStorages
/* for (let i=0; i<localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: " + clave + " => Valor: " + localStorage.getItem(clave));
} */


// Eliminando un o todas las localStorage/sessionStorages
//localStorage.removeItem("nombre"); // Eliminar la localStorage con el nombre "nombre";
//localStorage.clear(); // Eliminar TODAS las localStorages


// ¿Qué pasa cuando guardamos un objeto o un array en una localStorage?
/* let gaseosa = {id:1, nombre:"Coca Cola", precio:700};
let gaseosas = [
    {id:1, nombre:"Coca Cola", precio:700},
    {id:2, nombre:"Pepsi", precio:650}
]; */
//localStorage.setItem("gaseosa", gaseosa); //almacena mi objeto como object Object
//localStorage.setItem("gaseosas", gaseosas); //almaceina mi array como object, object, object...
/* alert("Gaseosa: " + localStorage.getItem("gaseosa")); */

// Almaceno mi objeto "Gaseosa"
/* localStorage.setItem("gaseosa", JSON.stringify(gaseosa)); */
// Almaceno mi array "Gaseosas"
/* localStorage.setItem("gaseosas", JSON.stringify(gaseosas)); */

// Convertir el contenido en formato JSON a su valor Original
/* let objGaseosa = JSON.parse(localStorage.getItem("gaseosa"));
console.log(objGaseosa);
console.log("Nombre: " + objGaseosa.nombre); */


// Ejemplo aplicado
/* let gaseosas = [
    {id:1, nombre:"Coca Cola", precio:700},
    {id:2, nombre:"Pepsi", precio:650},
    {id:3, nombre:"Manaos", precio:450},
    {id:4, nombre:"Cunnington Cola", precio:550}
]; // Definir un array de objetos (gaseosas)

const guardarLocalStorage = (clave, valor) => { // Declarar una función que me crea una localStorage, convirtiendo mi array en formato JSON
    localStorage.setItem(clave, JSON.stringify(valor));
}

const cargarLocalStorage = (clave) => { // Declarar una función que lee una localStorage especificada y parsea el contenido de la localStorage
    return JSON.parse(localStorage.getItem(clave));
}

guardarLocalStorage("listaDePrecios", gaseosas); // Ejecutar mi función que guarde la localStorage

class Producto { // Declarar la clase Producto
    constructor(objeto) {
        this.nombre = objeto.nombre.toUpperCase();
        this.precio = parseFloat(objeto.precio);
    }

    aplicarIVA() {
        this.precio = this.precio * 1.21;
    }
}

const productosAlmacenados = cargarLocalStorage("listaDePrecios"); // Ejecuto la función cargarLocalStorage y guardo el resultado en la constante
const productos = []; // Array de Objetos Productos

for (const itemProducto of productosAlmacenados) { // Recorrer el array de Productos Almacenados de mi localStorage
    let objetoProducto = new Producto(itemProducto); // Crear una nueva instancia de la Clase Producto, a partir del objeto
    productos.push(objetoProducto); // Guardar en el Array Productos, un objeto de la Clase Producto
}

for (const producto of productos) { // Recorrer el array Productos, y llamar al método aplicarIVA()
    producto.aplicarIVA()
}

console.log(productos); // Muestro finalmente el array Productos */


// Ejemplo aplicado: Calculadora de Sueldo Neto
const calcularSueldo = () => {
    let nombre = document.getElementById("nombre");
    let nombreError = document.getElementById("nombreError");
    let sueldoBruto = document.getElementById("sueldoBruto");
    let sueldoBrutoError = document.getElementById("sueldoBrutoError");

    if (nombre.value == "") {
        nombreError.innerHTML = "Complete el campo Nombre!";
        nombreError.className = "text-danger";
        return false;
    } else {
        nombreError.innerHTML = "";
    }

    if (sueldoBruto.value == "") {
        sueldoBrutoError.innerHTML = "Complete el campo Sueldo Bruto!";
        sueldoBrutoError.className = "text-danger";
        return false;
    } else {
        sueldoBrutoError.innerHTML = "";
    }

    const datosUsuario = {nombreUsuario:nombre.value, sueldoBruto:sueldoBruto.value};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario)); //Guardar mi objeto datosUsuario en la localStorage
    const datosUsuarioLS = JSON.parse(localStorage.getItem("datosUsuario")); // Leo la localStorage datosUsuario y parseo el contenido

    // Realizo los cálculos del sueldo
    let impuestoJubilacion = datosUsuarioLS.sueldoBruto * 0.11;
    let impuestoObraSocial = datosUsuarioLS.sueldoBruto * 0.03;
    let impuestoPami = datosUsuarioLS.sueldoBruto * 0.03;
    let retenciones = impuestoJubilacion + impuestoObraSocial + impuestoPami;
    let sueldoNeto = datosUsuarioLS.sueldoBruto - retenciones;
    let contenidoHTML = `<h3>Calculo de Sueldo Neto</h3>
    <table class="table">
    <tr>
    <td class="bg-primary-subtle">Sueldo Bruto:</td><td class="bg-primary-subtle text-end"><b>$${datosUsuarioLS.sueldoBruto}</b></td>
    </tr>
    <tr>
    <td>Jubilación (11%):</td><td class="text-end"><b>$${impuestoJubilacion}</b></td>
    </tr>
    <tr>
    <td>Obra Social (3%):</td><td class="text-end"><b>$${impuestoObraSocial}</b></td>
    </tr>
    <tr>
    <td>PAMI (3%):</td><td class="text-end"><b>$${impuestoPami}</b></td>
    </tr>
    <tr>
    <td class="bg-primary-subtle">Sueldo Neto:</td><td class="bg-primary-subtle text-end"><b>$${sueldoNeto}</b></td>
    </tr>
    </table>`;
    document.getElementById("resultado").innerHTML = contenidoHTML;
}

document.getElementById("btnCalcularSueldo").onclick = calcularSueldo;