/* Esto es un comentario
Otro línea de comentario */

let nombre = "Jesús Hernández";
console.log(nombre);
let encabezado = document.getElementById("encabezado");
encabezado.innerHTML = nombre;

document.getElementById("parrafo1").innerHTML = "Estamos en el <b>Curso de JavaScript</b>";


function saludar() {
    let texto = "Hola! Estamos realizando el Curso de JavaScript en Coerhouse!";
    alert(texto);
    document.body.append(texto);
}

document.getElementById("boton").addEventListener("click", saludar);

let nombrecompleto = prompt("Ingrese su Nombre");

if (nombrecompleto == "Juan") {
    alert("Hola, JUAN! SOS UN GROSO!");
} else {
    alert("Hola, " + nombrecompleto);
}