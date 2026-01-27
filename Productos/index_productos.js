// document.getElementById("id") -> HTML
// document.getElementByClass("btn") -> HTML
// document.getElementByTag("button") -> HTML
// let botones =  document.getElementsByClassName("btn") -> HTML ELEMENT -> LIST
// document.querySelector(".clase") -> HTML
// document.querySelector("#id") -> HTML
// document.querySelector("tag") -> HTML
// document.querySelector("div.contenido ul.lista-principal input[type=text]")

const botonRegistrar = document.querySelector("#boton-registrar");
const botonLimpiar = document.querySelector("#boton-limpiar");
const inputNombre = document.querySelector("#input-nombre");
const inputPrecio = document.querySelector("#input-precio");
const inputDescripcion = document.querySelector("#input-descripcion");
const selectCategoria = document.querySelector("#select-categoria");
const spanCaracteres = document.querySelector("span");
const listaProductos = document.querySelector("ul");
const botonVaciar = document.querySelector("#boton-vaciar");

inputDescripcion.addEventListener("input", (e) => {
  // Detecta los que se escriba en el input -> evento tipo input
  // Obtenemos longitud actual del input
  const totalCaracteres = inputDescripcion.value.length;
  // Actualizamos el span con el número real
  spanCaracteres.innerHTML = totalCaracteres;
  // Si sobrepasas los caracteres saldrá en color rojo
  if (totalCaracteres > 100) {
    spanCaracteres.style.color = "red";
    spanCaracteres.innerHTML = 100;
    Swal.fire({
      title: "Error",
      text: "Sobrepasaste los carácteres que puedes introducir",
      icon: "error",
      timer: 1500,
    });
  }
});

botonVaciar.addEventListener("click", (e) => {
  vaciarInputs(inputNombre, inputPrecio, inputDescripcion);
});

botonLimpiar.addEventListener("click", (e) => {
  listaProductos.classList.add("animate__animated", "animate__swing");
  setTimeout(() => {
    listaProductos.innerHTML = "";
    listaProductos.classList.remove("animate__animated", "animate__swing");
  }, 700);
});

botonRegistrar.addEventListener("click", (e) => {
  if (
    inputNombre.value.length > 0 &&
    Number(inputPrecio.value) > 0 &&
    inputDescripcion.value.length > 0
  ) {
    insertarProducto(inputNombre.value, inputPrecio.value);
  } else {
    Swal.fire({
      title: "Error",
      text: "Falta algun dato por rellenar",
      icon: "error",
      timer: 1500,
    });
  }
  // mediante swAlerts avisar de que el producto con nombre XX añadido correctamente
  // desaparece a las 2seg
  // todos los campos se limpian
  // no
  // lanza un dialogo de error con swAlerts
});
function vaciarInputs() {
  for (let index = 0; index < arguments.length; index++) {
    const element = (arguments[index].value = "");
  }
}
function limpiarCampos() {
  for (let index = 0; index < arguments.length; index++) {
    const element = (arguments[index].value = "");
  }
}

function insertarProducto(nombre, precio) {
  // listaProductos.innerHTML += `<li class='list-group-item animate__animated animate__fadeInRight'>${nombre} - ${precio} <button class='btn btn-danger'>Eliminar</button></li>`;
  // crea li logico comparte las configuraciones dadas
  let nodoLI = document.createElement("li");
  nodoLI.textContent = `${nombre} - ${precio}`;
  nodoLI.className = "list-group-item animate__animated animate__fadeInRight";
  nodoLI.classList.add(
    "list-group-item",
    "animate__animated",
    "animate__fadeInRight",
  );
  // Creo la etiqueta
  let nodoBoton = document.createElement("button");
  // La personalizo
  nodoBoton.classList.add("btn", "btn-danger", "ms-4");

  // La doy un nombre
  nodoBoton.textContent = "Eliminar";
  nodoLI.appendChild(nodoBoton);
  // Escuchamos el boton creado
  nodoBoton.addEventListener("click", (e) => {
    // Metemos la lógica para eliminar el boton
    nodoLI.classList.remove("animate__fadeInRight");
    // Coge un elemento de la lista
    // Sólo puede existitir una animacion por tanto lo borramos
    nodoLI.classList.add("animate__bounceOut");
    // Me permite que tarde unos segundos en ejecutarse el eliminado del elemento de la lista
    setTimeout(() => {
      listaProductos.removeChild(nodoLI);
    }, 700);
  });
  listaProductos.appendChild(nodoLI);
  Swal.fire({
    title: "Exito",
    text: "Producto agregado correctamente",
    icon: "success",
    timer: 1500,
  });
  limpiarCampos(inputNombre, inputPrecio, inputDescripcion);
}
