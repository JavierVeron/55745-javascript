// Objeto Math
//console.log("Número PI: " + Math.PI);

// Obtener Máx o Mín
/* console.log("Máximo: " + Math.max(10, 100, 30, -20, 50, 0));
console.log("Mínimo: " + Math.min(10, 100, 30, -20, 50, 0)); */

// Ceil, Floor y Round
/* console.log("Ceil: " + Math.ceil(6.6));
console.log("Floor: " + Math.floor(6.6));
console.log("Round: " + Math.round(6.5)); */

// Square Root (Raíz cuadrada)
/* console.log("Raíz Cuadrada: 9 => " + Math.sqrt(9));
console.log("Raíz Cuadrada: 16 => " + Math.sqrt(16));
console.log("Raíz Cuadrada: 81 => " + Math.sqrt(81));
console.log("Raíz Cuadrada: 25 => " + Math.sqrt(25));
console.log("Raíz Cúbica: 27 => " + Math.cbrt(27));
console.log("Raíz Cúbica: 125 => " + Math.cbrt(125)); */

// Random (número aleatorio)
//console.log("Aleatorio: " + Math.round(Math.random() * 10));

/* const generarNumeroAleatorio = (max) => {
    return Math.floor(Math.random() * max);
}

const numerosSorteo = [0, 0, "PLAY 5", 0, 0];
//const numeroElegido = parseInt(prompt("Ingrese un Número del Sorteo: (1-5"));
const numeroAleatorio = generarNumeroAleatorio(numerosSorteo.length); //1

const sorteo = (numerosSorteo, numeroAleatorio) => {
    console.log("Número Aleatorio:" + numeroAleatorio);

    if (numerosSorteo[numeroAleatorio] == 0) {
        alert("PERDISTE! NO GANASTE NADA!")
    } else {
        alert("GANASTE! PREMIO: " + numerosSorteo[numeroAleatorio])
    }
} 

sorteo(numerosSorteo, numeroAleatorio); */

// Generar números random entre 75 y 100
/* console.log("Random entre 75 y 100: " + (Math.round(Math.random() * 25) + 75));
console.log("Random desde Prompt: " + (Math.round(Math.random() * parseInt(prompt("Ingrese el valor máximo:"))) + 50)); */

// Clase Date
/* const fecha = new Date();
console.log(fecha); */

// Definir una fecha
/* const nuevaFecha = new Date(2023, 0, 22, 20, 30, 15);
console.log(nuevaFecha); */

const fechaActual = new Date();
/* let dia = fechaActual.getDate();
let mes = fechaActual.getMonth() + 1;
let anio = fechaActual.getFullYear();
let hora = fechaActual.getHours();
let minutos = fechaActual.getMinutes();
let segundos = fechaActual.getSeconds();
console.log(`Fecha Actual: ${dia}-${mes}-${anio} ${hora}:${minutos}:${segundos}`); */

// Formateo de Fecha
/* console.log(fechaActual.toDateString());
console.log(fechaActual.toLocaleString());
console.log(fechaActual.toLocaleDateString());
console.log(fechaActual.toTimeString()); */

// Diferencia de Fechas
/* const calcularDiasParaNavidad = (fechaActual) => {
    const fechaNavidad = new Date("25 December, 2023");
    const diferencia = fechaNavidad - fechaActual;
    const milisegundosPorDia = 60 * 60 * 24 * 1000;
    const dias = Math.round(diferencia / milisegundosPorDia);

    return dias;
} */

/* const calcularProximoCumple = (fecha) => { //DD-MM-AAAA
    const fechaActual = new Date();
    const arrayFecha = fecha.split("-");
    const fechaCumple = new Date(parseInt(arrayFecha[2]), parseInt(arrayFecha[1])-1, parseInt(arrayFecha[0]));
    const diferencia = fechaCumple - fechaActual;
    const milisegundosPorDia = 60 * 60 * 24 * 1000;
    const dias = Math.round(diferencia / milisegundosPorDia);

    return dias;
} */

/* let dias = calcularDiasParaNavidad(fechaActual);
alert("FALTAN: " + dias + " días para NAVIDAD!"); */

/* let cumple = prompt("Ingrese la Fecha de Cumpleaños: (DD-MM-AAAA"); //Genera un texto en formato String 14-11-2023
let dias = calcularProximoCumple(cumple);
alert("Faltan " + dias + " días para tu Cumple Angie!!!"); */

const calcularProximoVerano = () => {
    const fechaActual = new Date();
    const fechaVerano = new Date(2023, 11, 21);
    const diferencia = fechaVerano - fechaActual;
    const milisegundosPorDia = 60 * 60 * 24 * 1000;
    const dias = Math.round(diferencia / milisegundosPorDia);

    return dias;
}

let dias = calcularProximoVerano();
let contenido = document.getElementById("contenido");
let texto = "ULTIMO MOMENTO<BR><BR>FALTAN " + dias + "<br>DÍAS PARA<br>EL VERANO";
contenido.innerHTML = texto;