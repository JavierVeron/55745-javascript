// DOM
//console.log(document.head);
/* console.log(document.body);
document.body.children[1].innerHTML = "Curso de React JS"
console.log(document.body.children[1].innerHTML); */

// Acceder a los Elementos HTML
// getElementById => Te trae un solo elemento html por medio de su ID
/* let div = document.getElementById("app");
let resultado = document.getElementById("contenido");
console.log(div.innerHTML);
console.log(resultado.innerHTML);
resultado.innerHTML = "Curso de <b>JavaScript</b>"; */

// getElementsByClassName => Te trae un HTML Collection (Array de Elementos HTML) con elementos por medio de la clase
/* let listaPaises = document.getElementsByClassName("paises");
console.log(listaPaises); */

/* for (const pais of listaPaises) {
    console.log(pais.innerHTML);
} */

/* listaPaises[1].innerHTML = "Colombia";
console.log(listaPaises[1].innerHTML); */

// getElementsByTagName => Te trae un HTML Collection con elementos por medio de su etiqueta html
/* let listaPaises = document.getElementsByTagName("li");
console.log(listaPaises);
listaPaises[5].innerHTML = "USA"; */

/* console.log(document.body.children[1].children[1].innerHTML); */

// Modificando Nodos
/* let parrafo = document.getElementById("parrafo");
console.log(parrafo);
console.log(parrafo.innerText);
console.log(parrafo.innerHTML);
//parrafo.innerHTML = "Esto es otra <b>cosa</b>";
parrafo.innerHTML = "<img src='https://media.tycsports.com/files/2023/09/07/615480/messi-_416x234.webp' alt='Lionel Messi' width='480'>";
parrafo.className = "rounded rounded float-end"; */


// Creando Nodos
/* let parrafo = document.createElement("p");
parrafo.innerHTML = "Un texto <b>cualquiera</b>";
parrafo.className = "bg-success text-white p-3"
//document.body.append(parrafo);
let contenido = document.getElementById("contenido");
contenido.appendChild(parrafo); */

// Agregando un nuevo Pais
/* let listaPaises = document.getElementById("paises2");
let nuevoPais = document.createElement("li");
nuevoPais.innerHTML = "Ecuador";
listaPaises.appendChild(nuevoPais); */

// Eliminando Nodos por ID
/* document.getElementById("contenido").remove(); */

// Eliminado Nodos por su Posición del Array
/* let listaPaises = document.getElementsByClassName("paises");
listaPaises[2].remove(); */


// Accediendo/modificando valores de un Campo de Texto
/* let campoEmail = document.getElementById("email");

if (!campoEmail.value.includes("@")) {
    document.getElementById("emailError").innerHTML = "Por favor, ingrese un Email válido!";
    document.getElementById("emailError").className = "text-danger";
} */

/* document.getElementById("email").value = "jose@toledo.com";
document.getElementById("emailError").innerHTML = "Tu email es: " + email
let email = document.getElementById("email").value; */

// Plantillas Literal
/* let bebida = {id:1, nombre:"Coca Cola", precio:700};

let parrafo = document.getElementById("parrafo");
parrafo.innerHTML = `${bebida.nombre} $${bebida.precio*1.1}`; */


// Render Productos
/* const productos = [
    {id:1, nombre:"Gaseosa 7 Up lima limón 1.5 l.", precio:323, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/277290-1200-auto?v=638128491314900000&width=1200&height=auto&aspect=true"},
    {id:2, nombre:"Gaseosa Pepsi black 1.5 l.", precio:330, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/191207-1200-auto?v=637511787821470000&width=1200&height=auto&aspect=true"},
    {id:3, nombre:"Gaseosa Coca Cola sabor original lata 354 cc.", precio:229, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332150-1200-auto?v=638211437415200000&width=1200&height=auto&aspect=true"},
    {id:4, nombre:"Gaseosa Schweppes tónica 1.5 l.", precio:576, imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332234-1200-auto?v=638211437653630000&width=1200&height=auto&aspect=true"}
];

let contenido = document.getElementById("contenido"); */

// Opcion #1 - Creando Elementos HTML
/* for (const producto of productos) {
    let div = document.createElement("div");
    div.className = "col-md-3";
    let imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.className = "img-fluid";
    let precio = document.createElement("p");
    precio.innerHTML = `<b>$${producto.precio}</b>`;
    precio.className = "text-primary";
    let nombre = document.createElement("p");
    nombre.innerHTML = producto.nombre;
    nombre.className = "text-secondary";
    div.appendChild(imagen);
    div.appendChild(precio);
    div.appendChild(nombre);
    contenido.appendChild(div);
} */

// Opción #2 - Inyectando contenido HTML
/* let salida = "";

for (const producto of productos) {
    salida += `<div class="col-md-3">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
    <p class="text-primary"><b>$${producto.precio}</b></p>
    <p class="text-secondary">${producto.nombre}</p>
    </div>`;
}

contenido.innerHTML = salida; */

// Query Selector
/* let contenido = document.querySelector("#contenido"); //Equivaliente a getElementById
contenido.innerHTML = "Un texto"; */

/* let texto = document.querySelector("div .texto");
console.log(texto); */

/* let textos = document.querySelectorAll("div .texto");
console.log(textos); */