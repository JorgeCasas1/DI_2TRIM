const inputNombreMaterial = document.querySelector("#inputNombreMaterial");
const inputPrecio = document.querySelector("#inputPrecio");
const inputDescripcion = document.querySelector("#inputDescripcion");
const selectorMateriales = document.querySelector("#select-materialGym");
const listaMateriales = document.querySelector("ul");
const botonEnviar = document.querySelector("#botonEnviar");
const botonEliminar = document.querySelector("#botonEliminar");
const botonInfo = document.querySelector("#botonInfo");

insertarDatos();
eliminarDatos();

function insertarDatos() {
  botonEnviar.addEventListener("click", (e) => {
    if (
      inputNombreMaterial.value.trim() == "" ||
      inputDescripcion.value.trim() == "" ||
      selectorMateriales.value == "Tipo de material de gym"
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por rellenar",
      });
      return;
    } else {
      Swal.fire({
        title: "Datos enviados",
        icon: "success",
        draggable: true,
      });

      // Creamos el elemento que queremos meter en nuestro html en este caso un li
      let añadirNuevoMaterial = document.createElement("li");
      // creo el elemento que quiero que aparezca dentro de mi elemento de la lista
      let botonInfoLista = document.createElement("button");
      //Le damos el nombre que queremos que aparezca en el botón
      botonInfoLista.textContent = "Información";
      // Lo personalizamos (le damos la apariencia de boton, de tipo info y con un margen de separacion)
      botonInfoLista.classList.add("btn", "btn-info", "ms-4");
      // Si le damos a informacion saldrá toda la relacionada con el matwerial
      botonInfoLista.addEventListener("click", (e) => {
        consultarInfoCompletaProducto();
      });
      // Le asignamos el valor que queremos que tenga a la hora de verse en la parte gráfica
      añadirNuevoMaterial.textContent = `Nombre: ${inputNombreMaterial.value} - Precio: ${inputPrecio.value}$`;
      // Lo metemos dentro del elemento de la lista junto con el que aparecerá
      añadirNuevoMaterial.appendChild(botonInfoLista);
      // Añadimos el material a la lista
      listaMateriales.appendChild(añadirNuevoMaterial);
      // limpiarCampos();
    }
    // Pasamos el input a number para poder hacer la validación (ya que de inicio es un input tipo text aunque sea number)
    if (Number(inputPrecio.value) <= 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debes poner un precio mayor que cero",
      });
      return;
    }
  });
}

function limpiarCampos() {
  /*for (let index = 0; index < arguments.length; index++) {
    arguments[index].value = "";
  }*/
  inputDescripcion.value = "";
  inputNombreMaterial.value = "";
  inputPrecio.value = "";
  selectorMateriales.value = 0;
}

function consultarInfoCompletaProducto() {
  Swal.fire({
    title: "Información del producto",
    text: `Material: ${inputNombreMaterial.value}\n Precio: ${inputPrecio.value}\n Descripción: ${inputDescripcion.value}\n Categoria: ${selectorMateriales.value}`,
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}

function eliminarDatos() {
  botonEliminar.addEventListener("click", (e) => {
    if (listaMateriales.innerHTML == "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "La lista esta vacía, no se pueden eliminar elementos",
      });
      return;
    }
    listaMateriales.innerHTML = "";
    Swal.fire({
      title: "Lista vaciada con éxito",
      icon: "success",
      draggable: true,
    });
  });
}
