const nombreJuego = document.querySelector("#inputNombre");
const precioJuego = document.querySelector("#inputPrecio");
const descripcion = document.querySelector("#inputDesc");
const selectJuegos = document.querySelector("#select-videojuegos");
const listaJuegos = document.querySelector("#listaJuegos");
const botonEliminar = document.querySelector("#botonEliminar");
const botonInfo = document.querySelector("#botonInfo");
const botonEnviar = document.querySelector("#botonEnviar");
const spanCaracteres = document.querySelector("#spanCaracter");

enviarDatos();
actualizarContadorCaracteres();
vaciarLista();

function enviarDatos() {
  botonEnviar.addEventListener("click", (e) => {
    if (
      nombreJuego.value.trim() == "" ||
      descripcion.value == "" ||
      precioJuego.value == "" ||
      selectJuegos.value == "Plataformas"
    ) {
      Swal.fire({
        title: "Error",
        text: "Faltan campos por rellenar",
        icon: "warning",
      });
      return;
    } else if (nombreJuego.value.length < 3) {
      Swal.fire({
        title: "Error",
        text: "El juego debe contener más de tres caractéres",
        icon: "warning",
      });
      return;
    } else if (Number(precioJuego.value) == 0) {
      Swal.fire({
        title: "Juego gratuito",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
      return;
    } else {
      const elementoLista = document.createElement("li");
      elementoLista.textContent = `Juego ${nombreJuego.value} - ${precioJuego.value}$`;
      listaJuegos.appendChild(elementoLista);
      const botonEliminarElementoLista = document.createElement("button");
      botonEliminarElementoLista.textContent = "Eliminar";
      botonEliminarElementoLista.classList.add("btn", "btn-warning", "ms-4");
      elementoLista.appendChild(botonEliminarElementoLista);
      botonEliminarElementoLista.addEventListener("click", (e) => {
        elementoLista.remove();
        Swal.fire({
          title: "Eliminación de juego",
          text: "Elemento eliminado",
          icon: "success",
        });
      });
      limpiarCampos(nombreJuego, precioJuego, descripcion, selectJuegos);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Datos enviados a la lista",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}
function actualizarContadorCaracteres() {
  descripcion.addEventListener("input", (e) => {
    const totalCaracteres = descripcion.value.length;
    spanCaracteres.innerHTML = totalCaracteres;
    if (totalCaracteres >= 100) {
      spanCaracteres.style.color = "red";
      Swal.fire({
        title: "Error",
        text: "No puede tener más de 100 caractéres",
        icon: "warning",
      });
      return;
    }
  });
}

function limpiarCampos() {
  for (let index = 0; index < arguments.length; index++) {
    arguments[index].value = "";
  }
}

function vaciarLista() {
  botonEliminar.addEventListener("click", (e) => {
    if (listaJuegos.innerHTML == "") {
      Swal.fire({
        title: "Error",
        text: "La lista ya esta vácia",
        icon: "warning",
      });
      return;
    }
    listaJuegos.innerHTML = "";
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Elemento eliminado correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  });
}
