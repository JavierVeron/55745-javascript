// Eventos en JS
/* function saludar() {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "<h1>Hola Coders!</h1>";
}

let btnSaludar = document.getElementById("btnSaludar"); */
// Opción #1 => addEventListener (método)
/* btnSaludar.addEventListener("click", saludar); */
/* btnSaludar.addEventListener("click", () => {
    console.log("Hola a Todos, estoy estudiando JavaScript!");
}); */

// Opción #2 => onclick (propiedad)
/* btnSaludar.onclick = saludar; */
/* btnSaludar.onclick = () => {
    console.log("Hola a Todos, estoy estudiando JavaScript!");
}; */


// Ejemplo - Validación de Formulario
/* const validarFormulario = () => {
    let email = document.getElementById("email").value;
    let clave = document.getElementById("clave").value;
    let resultado = document.getElementById("resultado");
    
    if (email == "") {
        resultado.innerHTML = "Error! Complete el campo Email!";
        resultado.className = "bg-danger text-white my-1 p-1";
        return false;
    }

    if (clave == "") {
        resultado.innerHTML = "Error! Complete el campo Calve!";
        resultado.className = "bg-danger text-white my-1 p-1";
        return false;
    }

    resultado.innerHTML = "Los datos se enviaron correctamente!";
    resultado.className = "bg-success text-white my-1 p-1";
}

document.getElementById("btnEnviar").addEventListener("click", validarFormulario); //Opción #1 (método addEventListener)
document.getElementById("btnEnviar").onclick = validarFormulario; // Opción #2 (propiedad onclick) */


// Métodos de Mouse
/* let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("mousedown", () => {
    console.log("Apretaste el botón!");
});

btnEnviar.addEventListener("mouseup", () => {
    console.log("Soltaste el botón!");
});

btnEnviar.addEventListener("mouseover", () => {
    console.log("Entraste al botón!");
});

btnEnviar.addEventListener("mouseout", () => {
    console.log("Saliste del botón!");
});

btnEnviar.addEventListener("mousemove", () => {
    console.log("Moviste el mouse!");
}); */


// Ejemplo aplicado utilizando método input
/* const contarCaracteres = () => {
    let texto = document.getElementById("texto")
    let resultado = document.getElementById("resultado");
    const max = 140;
    let diferencia = max - texto.value.length;

    if (texto.value.length <= max) {
        resultado.innerHTML = "Caracteres disponibles: " + diferencia;

        if (diferencia < 20) {
            resultado.className = "text-danger";
        } else {
            resultado.className = "text-dark";
        }
    }
}

document.getElementById("texto").addEventListener("input", contarCaracteres); */


// Evento submit
/* const validarFormulario = (event) => {
    event.preventDefault(); // Detiene el envío del Formulario
    let email = document.getElementById("email").value;
    let clave = document.getElementById("clave").value;
    let resultado = document.getElementById("resultado");
    let formularioLogin = document.getElementById("formularioLogin");
    
    if (email == "") {
        resultado.innerHTML = "Error! Complete el campo Email!";
        resultado.className = "bg-danger text-white my-1 p-1";
        return false;
    }

    if (clave == "") {
        resultado.innerHTML = "Error! Complete el campo Calve!";
        resultado.className = "bg-danger text-white my-1 p-1";
        return false;
    }

    resultado.innerHTML = "Los datos se enviaron correctamente!";
    resultado.className = "bg-success text-white my-1 p-1";
    formularioLogin.submit();
}

document.getElementById("btnEnviar").addEventListener("click", validarFormulario); */

// Evento submit - Accediendo a los elementos html desde un evento
let formulario = document.getElementById("form1");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let form1 = e.target;
    //console.log(form1);
    console.log("Nombre: " + form1.children[0].value);
    console.log("DNI: " + form1.children[1].value);
})
