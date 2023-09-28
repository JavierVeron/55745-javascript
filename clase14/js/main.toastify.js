let btnGuardar = document.querySelector("#btnGuardar");
let btnCargar = document.querySelector("#btnCargar");
let btnEliminar = document.querySelector("#btnEliminar");

const guardarDatos = () => {
    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    const datosUsuario = {nombre:nombre.value, email:email.value};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

    Toastify({
        text: "Los datos se guardaron correctamente!",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor:"blue"
      }).showToast();

    nombre.value = "";
    email.value = "";
}

const cargarDatos = () => {
    const resultado = document.querySelector("#resultado");
    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
    let contenidoHTML = `<p>Usuario: <b>${datosUsuario.nombre}</b><br>
    Email: <b>${datosUsuario.email}</b></p>`;
    resultado.innerHTML = contenidoHTML;

    Toastify({
        text: "Los datos se cargaron correctamente!",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor:"grey"
      }).showToast();
}

const eliminarDatos = () => {
    Toastify({
        text: "¿Desea eliminar los datos?",
        duration: 5000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor:"red",
        onClick: function(){
            localStorage.removeItem("datosUsuario");
            document.querySelector("#resultado").innerHTML = "";
            Toastify({
                text: "Los datos se eliminaron correctamente!",
                duration: 2000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor:"blue"
              }).showToast();
        } // Callback after click
      }).showToast();
}

btnGuardar.onclick = guardarDatos;
btnCargar.onclick = cargarDatos;
btnEliminar.onclick = eliminarDatos;