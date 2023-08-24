// Declarando una función
/* function saludar() {
    console.log("Hola!");
    console.log("Chau!");
} */

// Llamando una función!
//saludar();

// Otro ejemplo
/* function solicitarNombre() {
    let nombre = prompt("Ingrese su Nombre:");
    alert("Tu nombre es: " + nombre);
    //saludar();
}

solicitarNombre(); */

// Declarar una función con parámetros
/* function solicitarNombre(unaVariable) {
    alert("Tu nombre es: " + unaVariable);
}

solicitarNombre("Soledad");
let nombre = "Juan";
solicitarNombre(nombre);
let name2 = prompt("Ingrese su nombre:");
solicitarNombre(name2);
solicitarNombre(prompt("Ingrese su nombre:")); */

// Otro ejemplo
/* function nombreCompleto(nombre1, nombre2, apellido) {
    let nombre = nombre1 + " " + nombre2 + " " + apellido;
    alert("Tu Nombre completo es: " + nombre);
} */

/* nombreCompleto("Tomas", "A.", "Torregiani");
let a1 = prompt("Ingrese su Primer Nombre:");
let a2 = prompt("Ingrese su Segundo Nombre:");
let a3 = prompt("Ingrese su Apellido:");
nombreCompleto(a1, a2, a3); */

// Otro ejemplo
/* function sumar(valor1, valor2) {
    let resultado = valor1 + valor2;
    alert("La suma es: " + resultado)
}

sumar(20, 30); */


// Declaramos una Función con Return
/* function sumar(valor1, valor2) {
    return valor1 + valor2;
}

let resultado = sumar(20, 50);
alert("El resultado de la suma es: " + resultado);
console.log("La suma es: " + sumar(50, 50)); */

// Otro ejemplo
/* function aplicarDescuento(importe) {
    importe = importe * 1.21; //Aplicar IVA
    alert("IVA Aplicado: " + importe);

    if (importe > 15000) { //Verifico si supera los $15000 pesos hacemos el 10% de Descuento
        importe = importe * 0.9; //Hago el 10% de descuento
        alert("Descuento aplicado! " + importe);
    }

    return importe; //Devuelvo el importe final
}

let importe = parseFloat(prompt("Ingrese un importe:"));
let resultado = aplicarDescuento(importe);
alert("El total a pagar es: $" + resultado); */


// Ejemplo aplicado: Calculadora
/* function calcular(valor1, valor2, operacion) {
    switch(operacion) {
        case "+":
            return valor1+valor2;
            break;
        case "-":
            return valor1-valor2;
            break;
        case "*":
            return valor1*valor2;
            break;
        case "/":
            return valor1/valor2;
            break;
        default:
            return 0;
    }
}

let numero1 = parseInt(prompt("Ingrese el Valor #1:"));
let numero2 = parseInt(prompt("Ingrese el Valor #2:"));
let resultado = calcular(numero1, numero2, "-");
alert("El resultado es: " + resultado) */


// Variables Globales y Locales
/* let valor = 1000; // Esto es un variable global
let valor2 = 10000; // variable global
/* function sumar(numero) {
    valor += numero;

    return valor;
}

let resultado = sumar(1000);
console.log("Resultado: " + resultado); */

/* function sumar() {
    //let valor = parseFloat(prompt("Ingrese un numero:")); //Es una variable local
    let valor2 = parseFloat(prompt("Ingrese un numero:")); // Variable local

    return (valor + valor2);
}

let resultado = sumar();
console.log("Resultado: " + resultado);
console.log(valor2); //Mostrar el valor de la variable global */

/* let nombre1 = "Luca"; //variable global

function pedirNombre() {
    //let nombre1 = prompt("Ingrese su Nombre"); //variable local
    let nombre1 = "Jesús"; //variable local
    
    return nombre1;
}

alert(pedirNombre());
alert(nombre1); */


// Funciones anónimas
/* const suma = function (valor1, valor2) { return valor1 + valor2};
//suma = 1000000;
console.log("Suma: " + suma(500, 600));
console.log(suma); */

/* const aplicarIVA = function (importe) { return importe * 1.21};
console.log(aplicarIVA(10000)); */
 

// Funciones Flecha
/* const suma = (valor1, valor2) => {
    return valor1 + valor2;
}

console.log(suma);
console.log(suma(500, 700)); */

/* const nombreCompleto = (nombre, apellido) => {
    return "Tu nombre es " + nombre + " " + apellido;
}

let nombre = nombreCompleto("Juan", "Paleari");
alert(nombre); */

/* const saludar = () => { return "Hola!" };
alert(saludar()); */


// Ejemplo aplicado
/* const suma = (valor1, valor2) => { return valor1 + valor2 };
const resta = (valor1, valor2) => { return valor1 - valor2 };
const iva = (valor) => { return valor * 0.21 };
const precioProducto = 10000;
const descuento = 1000;

let precioIVA = iva(precioProducto); //2100
console.log(precioIVA);
let precioConIVA = suma(precioProducto, precioIVA); //12100
console.log(precioConIVA);
let precioConDescuento = resta(precioConIVA, descuento);

alert("Total a Pagar: $" + precioConDescuento); */


const darClima = (temperatura) => {
    if (Number.isNaN(temperatura)) {
        return "Ingresa un Valor!";
    }

    if (temperatura < 10) {
        return "Hace frío!";
    } else if (temperatura < 20) {
        return "Está fresquito!";
    } else if (temperatura < 30) {
        return "Está lindo!";
    } else if (temperatura < 40) {
        return "Hace CALOR!";
    } else {
        return "NO SALGAS DE TU CASA!";
    } 
}

let temperatura = parseFloat(prompt("Ingrese la Temperatura:"));
alert(darClima(temperatura));