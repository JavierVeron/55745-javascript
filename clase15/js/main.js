//setTimeout => permite ejecutar funciones en forma asíncrona al cabo de unos milisegundos
const ejecutarEjemplo = () => {
    /* setTimeout(() => {
        document.querySelector("#resultado").innerHTML = "<h3>Hola Coders!</h3>";
    }, 3000) */

    /* console.log("Hola!");

    setTimeout(() => {
        console.log("Estoy en el setTimeout!");
    }, 2000);

    console.log("Chau!"); */

    //Ejemplo aplicado
    /* document.querySelector("#btnEjecutar").className = "btn btn-danger";

    setTimeout(() => {
        document.querySelector("#btnEjecutar").className = "btn btn-success";
        document.querySelector("#btnEjecutar").innerHTML = "Terminado!";
    }, 2000); */


    // Recorriendo Strings con for..of
    /* for (const letra of "Hola!") {
        console.log(letra);
    } */

    /* for (const letra of "Hola!") {
        setTimeout(() => {
            console.log(letra);
        }, 3000);
    } */

    /* console.log("Comienzo del Proceso!");

    setTimeout(() => {
        console.log("Mitad del Proceso!");
    }, 0);

    console.log("Fin del Proceso!"); */

    // Call stack
    /* function multiplicar (valor1, valor2) {
        return valor1 * valor2;
    }

    function multiplicarAlCuadrado(valor) {
        let resultado = multiplicar(valor, valor); //2°
        console.log(resultado);//3°
    }

    multiplicarAlCuadrado(10); //1°//4° */

    // clearInterval => permite ejecutar funciones en forma asíncrona al cabo de unos milisegundos de forma permanente
    /* setInterval(() => {
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Hola Mundo!!!";
        document.querySelector("#resultado").appendChild(parrafo)

    }, 2000); */    
}

/* document.querySelector("#btnEjecutar").onclick = ejecutarEjemplo; */

// clearInterval => detiene la ejecución de un setInterval
/* let contador = 0;

const intervalo = setInterval(() => {
    contador++;
    console.log("Contador: " + contador);

    if (contador == 5) {
        clearInterval(intervalo);
        console.log("Se detuvo el intervalo!");
    }

}, 2000); */

// clearTimeout => detenie la ejecución de un setTimeou
/* let contador = 0;

const intervalo = setTimeout(() => {
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Hola Mundo!!!";
    document.querySelector("#resultado").appendChild(parrafo)
}, 5000);

document.querySelector("#btnDetener").onclick = () => {
    document.querySelector("#btnDetener").className = "btn btn-success";
    document.querySelector("#btnDetener").innerHTML = "Proceso detenido!";
    clearTimeout(intervalo);
}; */


// Promesas
/* const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        reject("Error! No se cumplio la promesa")

    })
};

console.log(eventoFuturo()); */

/* const validarEdad = (edad) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (edad >= 18) {
                resolve("Podes comprar alcohol!");
            } else {
                reject("No, no podes comprar alcohol!");
            }
        }, 2000)
    })
}

const ejecutarPromesa = () => {
    let edad = document.querySelector("#edad").value; //Capturar el valor del campo de texto //17
    
    validarEdad(edad)
    .then(resultado => {
        document.querySelector("#resultado").innerHTML = `<div class="alert alert-success" role="alert">${resultado}</div>`;
    })
    .catch(error => {
        document.querySelector("#resultado").innerHTML = `<div class="alert alert-danger" role="alert">${error}</div>`;
    })
    .finally(() => {
        document.querySelector("#resultado").innerHTML += `<div class="alert alert-light" role="alert">Gracias por usar nuestra App!</div>`;
    })
}

document.querySelector("#btnEjecutar").onclick = ejecutarPromesa; */

let BD = [
    {id:1, nombre:"Doble Cuarto de Libra con Queso", calorias:771, descripcion:"Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:2500, categoria:"hamburguesas"},
    {id:2, nombre:"Big Mac", calorias:505, descripcion:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar", precio:2600, categoria:"hamburguesas"},
    {id:3, nombre:"McNífica", calorias:513, descripcion:"En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXXaUUP/200/200/original?country=ar", precio:2700, categoria:"hamburguesas"},
    {id:4, nombre:"Papas Grandes", calorias:339, descripcion:"Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXXQgnB/200/200/original?country=ar", precio:1500, categoria:"papas"},
    {id:5, nombre:"Papas Medianas", calorias:292, descripcion:"Nuestro sello. Las aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última. Crujientes y deliciosas, no vas a parar hasta terminarlas todas.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXmVCCk/200/200/original?country=ar", precio:1300, categoria:"papas"},
    {id:6, nombre:"Papas pequeñas", calorias:192, descripcion:"Calientes, crujientes y deliciosas, tus aliadas perfectas para cualquier comida. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última en su versión pequeña.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXUUjwZ/200/200/original?country=ar", precio:1100, categoria:"papas"},
    {id:7, nombre:"Sundae de Dulce de Leche", calorias:257, descripcion:"El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$sundae-dulce-de-leche.png/200/200/original?country=ar", precio:1000, categoria:"postres"},
    {id:8, nombre:"McFlurry Oreo", calorias:424, descripcion:"Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.", imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar", precio:1800, categoria:"postres"}
];

const pedirProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000);
    })
}

const mostrarSpinner = () => {
    document.querySelector("#resultado").innerHTML = `<div class="text-center">
    <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
}

const renderProductos = (productos) => {
    let contenidHTML = "";

    for (const prod of productos) {
        contenidHTML += `<div class="col-md-3">
        <div class="card border-0 mb-3">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <div class="card-body text-center">
          <p class="card-text"><b>${prod.nombre}</b><br>$${prod.precio}</p>
        </div>
        </div>
        </div>`;
    }

    document.querySelector("#resultado").innerHTML = contenidHTML;
}

mostrarSpinner();

pedirProductos().then(productos => {
    renderProductos(productos);
});