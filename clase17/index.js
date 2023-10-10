import express from "express";

const app = express();
const port = 8080;

app.get("/", (request, response) => {
    let contenido = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1 class="display-1 text-center p-5">Página Principal!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>`;
    response.send(contenido);
});

app.get("/quienes-somos", (request, response) => {
    let contenido = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1 class="display-1 text-center p-5">Quiénes Somos!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>`;
    response.send(contenido);
});

app.get("/servicios", (request, response) => {
    let contenido = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1 class="display-1 text-center p-5">Servicios!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>`;
    response.send(contenido);
});

app.get("/contacto", (request, response) => {
    let contenido = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      </head>
      <body>
        <h1 class="display-1 text-center p-5">Contacto!</h1>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </body>
    </html>`;
    response.send(contenido);
});

app.get("/bebidas", async (request, response) => {
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
    response.send({BD});
});

app.listen(port, () => {
    console.log("Servidor activo: " + port);
});
