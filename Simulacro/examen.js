const inputNombre = document.querySelector("#inputNombre");
const inputNumeroEmpleado = document.querySelector("#inputNumeroEmpleado");
const selectGenero = document.querySelector("#select-genero");
const botonRegistrar = document.querySelector("#botonRegistrar");
const inputBuscador = document.querySelector("#inputBuscador");
const botonBuscarEmpleado = document.querySelector("#botonBuscarEmpleado");
const botonEliminarEmpleado = document.querySelector("#botonEliminarEmpleado");
const listaEmpleados = document.querySelector("#listaEmpleados");
const spanCaracteres = document.querySelector("#spanCaracteres");

añadirLista();
contadorCaracteres();
buscarEmpleado();
eliminarEmpleadoBuscado();

function contadorCaracteres() {
  inputNombre.addEventListener("input", (e) => {
    const totalCaractertes = inputNombre.value.length;
    spanCaracteres.innerHTML = totalCaractertes;
  });
}

function añadirLista() {
  botonRegistrar.addEventListener("click", () => {
    if (
      inputNombre.value == "" ||
      inputNumeroEmpleado.value == "" ||
      selectGenero.value == "Selecciona tú género"
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan campos por rellenar",
      });
    } else {
      const elementoLista = document.createElement("li");
      elementoLista.textContent = `NOMBRE: ${inputNombre.value} - ID: ${inputNumeroEmpleado.value} `;
      listaEmpleados.appendChild(elementoLista);
      Swal.fire({
        title: "Datos enviados",
        icon: "success",
        draggable: true,
      });
      limpiarCampos(inputNombre, inputNumeroEmpleado, selectGenero);
    }
  });
}

function limpiarCampos() {
  for (let index = 0; index < arguments.length; index++) {
    const element = (arguments[index].value = "");
    spanCaracteres.innerHTML = "0";
  }
}

function eliminarEmpleadoBuscado() {
  botonEliminarEmpleado.addEventListener("click", () => {
    // Convertimos los hijos en una lista fácil de recorrer
    const empleados = Array.from(listaEmpleados.children);

    empleados.forEach((empleado) => {
      // Si el texto del empleado contiene lo que pusiste en el buscador...
      if (empleado.textContent.includes(inputBuscador.value)) {
        empleado.remove(); // ¡Directo y sencillo!
        Swal.fire({
          title: "Elemento eliminado",
          icon: "success",
          draggable: true,
        });
      }
      limpiarCampos(inputBuscador);
    });
  });
}

function buscarEmpleado() {
  botonBuscarEmpleado.addEventListener("click", () => {
    const empleados = Array.from(listaEmpleados.children);
    empleados.forEach((empleado) => {
      if (empleado.textContent.includes(inputBuscador.value)) {
        empleado.style.display = "";
      } else {
        empleado.style.display = "none";
      }
    });
  });
}
