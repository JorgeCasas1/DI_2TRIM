const inputTextoQuePasa = document.querySelector("#inputTexto");
const inputCategoria = document.querySelector("#inputCategoria");
const inputBuscarCategoria = document.querySelector("#inputBuscarCategoria");
const botonPublicar = document.querySelector("#botonPublicar");
const botonBuscar = document.querySelector("#botonBuscar");
const botonLimpiar = document.querySelector("#botonLimpiar");
const listaCategoria = document.querySelector("#listaCategoria");
const spanCaracter = document.querySelector("#spanCaracter");

enviarDatos();
contadorCaracteres();
limpiarLista();
buscarLista();
limpiarLista();

// Se lo quería meter en el if de botonPublicar
// inputCategoria.value.trim().lowercase() != "noticias" || inputCategoria.value.trim().lowercase()  != "deportes" || inputCategoria.value.trim().lowercase()  != "humor"

function enviarDatos() {
  botonPublicar.addEventListener("click", (e) => {
    if (
      inputTextoQuePasa.value.trim() == "" ||
      inputCategoria.value.trim() == ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Texto Obligatorio",
        text: "Faltan datos por rellenar (o la categoria seleccionada no es la correcta)",
      });
      return;
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Tweet publicado",
        showConfirmButton: false,
        timer: 1500,
      });
      const crearElementoLista = document.createElement("li");
      crearElementoLista.textContent = `${inputTextoQuePasa.value}`;
      listaCategoria.appendChild(crearElementoLista);
      limpiarCampos();
    }
  });
}

function contadorCaracteres() {
  inputTextoQuePasa.addEventListener("input", (e) => {
    const totalCaracteres = inputTextoQuePasa.value.length;
    spanCaracter.innerHTML = totalCaracteres;
    if (totalCaracteres == 200) {
      spanCaracter.innerHTML = 200;
    }
  });
}

function limpiarCampos() {
  inputCategoria.value = "";
  inputTextoQuePasa.value = "";
}

function limpiarCamposBuscador() {
  inputBuscarCategoria.value = "";
}

function limpiarLista() {
  botonLimpiar.addEventListener("click", (e) => {
    if (listaCategoria.innerHTML == "") {
      Swal.fire({
        icon: "error",
        title: "Lista vacía",
        text: "No existen elementos para eliminar",
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Elementos eliminados correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      listaCategoria.innerHTML = "";
    }
    limpiarCamposBuscador();
  });
}

function buscarLista() {
  botonBuscar.addEventListener("click", (e) => {
    if (listaCategoria.innerHTML == "") {
      Swal.fire({
        icon: "error",
        title: "Lista vacía",
        text: "No existen elementos para buscar",
      });
    }
    limpiarCamposBuscador();
  });
}
