/* let texto = "Clase 17 - Fin de Cursada de JavaScript!";
console.log(texto); */

const bebida = {id:1, nombre:"Coca Cola", precio:850}; // Objeto

const bebidas = [
    {id:1, nombre:"Coca Cola", precio:850},
    {id:2, nombre:"Pepsi", precio:750},
    {id:3, nombre:"Manaos", precio:550}
]; // Array

let bebidaBuscada = bebidas.find(item => item.precio < 800);
console.log(bebidaBuscada);