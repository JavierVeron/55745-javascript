/* const saludar = () => {
    Swal.fire({
        title: 'Custom width, padding, color, background.',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://img.freepik.com/free-vector/diamond-shape-golden-pattern-vector-background_1017-13783.jpg?w=360)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://media.tenor.com/b_VTJ4TN0rYAAAAd/leo-messi.gif")
          right top
          no-repeat`
    })
}

document.getElementById("boton").onclick = saludar; */

let btnGuardar = document.querySelector("#btnGuardar");
let btnCargar = document.querySelector("#btnCargar");
let btnEliminar = document.querySelector("#btnEliminar");

const guardarDatos = () => {
    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    const datosUsuario = {nombre:nombre.value, email:email.value};
    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));

    Swal.fire({
        icon: 'info',
        title: 'OK!',
        text: 'Los datos se guardaron correctamente!'
    });

    nombre.value = "";
    email.value = "";
}

const cargarDatos = () => {
    const resultado = document.querySelector("#resultado");
    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"));
    let contenidoHTML = `<p>Usuario: <b>${datosUsuario.nombre}</b><br>
    Email: <b>${datosUsuario.email}</b></p>`;
    resultado.innerHTML = contenidoHTML;

    Swal.fire({
        icon: 'info',
        title: 'OK!',
        text: 'Los datos se cargaron correctamente!'
    });
}

const eliminarDatos = () => {
    Swal.fire({
        title: '¿Desea eliminar sus Datos?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Sí',
        denyButtonText: 'No',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            localStorage.removeItem("datosUsuario");
            document.querySelector("#resultado").innerHTML = "";
            Swal.fire('Los datos fueron eliminados!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se eliminaron los datos!', '', 'info')
        }
    })
}

btnGuardar.onclick = guardarDatos;
btnCargar.onclick = cargarDatos;
btnEliminar.onclick = eliminarDatos;