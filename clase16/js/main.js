// Fetch
/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data);
}) */

/* const consumirApi1 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenidoHTML = "";

        data.forEach(elemento => {
            contenidoHTML += `<div class="col-md-3 card mb-3">
            <div class="card-body">
              <h5 class="card-title">${elemento.title}</h5>
              <p class="card-text">${elemento.body}.</p>
            </div>
          </div>`;
        });

        document.getElementById("resultado").innerHTML = contenidoHTML;
    })
}

consumirApi1(); */

/* const consumirApi2 = () => {
    fetch("https://fakestoreapi.com/products")
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenidoHTML = "";

        data.forEach(product => {
            contenidoHTML += `<div class="col-md-3 mb-3">
            <div class="card border border-0 text-center">
            <img src="${product.image}" class="img-fluid" alt="${product.title}">
            <div class="card-body">
            <p class="card-text"><b>${product.title}</b></p>
            <p class="card-text">$${product.price}</p>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("resultado").innerHTML = contenidoHTML;
    })
    .catch(error => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger text-center" role="alert"><p>Error! No se pudo acceder al Servicio!<br>
        ${error}</p></div>`;
    })
}

consumirApi2(); */

// Postear o Crear un nuevo Elemento
/* const agregarNuevoProducto = () => {
    let titulo = document.getElementById("titulo").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen = document.getElementById("imagen").value;
    let categoria = document.getElementById("categoria").value;

    fetch('https://fakestoreapi.com/products', {
        method:"POST",
        body:JSON.stringify(
            {
                title: titulo,
                price: precio,
                description: descripcion,
                image: imagen,
                category: categoria
            }
        )
    })
    .then(res=>res.json())
    .then(json=> {
        //console.log(json);
        document.getElementById("resultado").innerHTML = `<div class="alert alert-info" role="alert"><p>El producto #${json.id} se agregó correctamente!</p></div>`
    })
}

document.getElementById("btnEnviar").addEventListener("click", agregarNuevoProducto); */

/* const consumirJSON = () => {
    fetch("json/productos.json")
    .then(respuesta => respuesta.json())
    .then(data => {
        let contenidoHTML = "";

        data.forEach(product => {
            contenidoHTML += `<div class="col-md-3 mb-3">
            <div class="card border border-0 text-center">
            <img src="${product.imagen}" class="img-fluid" alt="${product.nombre}">
            <div class="card-body">
            <p class="card-text"><b>${product.nombre}</b></p>
            <p class="card-text">$${product.precio}</p>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("resultado").innerHTML = contenidoHTML;
    })
    .catch(error => {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger text-center" role="alert"><p>Error! No se pudo acceder al Servicio!<br>
        ${error}</p></div>`;
    })
}

consumirJSON(); */

// Async y Await
const consumirApiAsyncAwait = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        let contenidoHTML = "";
    
        data.forEach(product => {
            contenidoHTML += `<div class="col-md-3 mb-3">
            <div class="card border border-0 text-center">
            <img src="${product.image}" class="img-fluid" alt="${product.title}">
            <div class="card-body">
            <p class="card-text"><b>${product.title}</b></p>
            <p class="card-text">$${product.price}</p>
            </div>
            </div>
            </div>`;
        });

        document.getElementById("resultado").innerHTML = contenidoHTML;
    } catch (error) {
        document.getElementById("resultado").innerHTML = `<div class="alert alert-danger text-center" role="alert"><p>Error! No se pudo acceder al Servicio!<br>${error}</p></div>`

    }
}

consumirApiAsyncAwait();