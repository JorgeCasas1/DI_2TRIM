const listaProducto = document.querySelector("#listaProductos");
const botonVertotal = document.querySelector("#botonVerTotal");
const totalProducto = document.querySelector("#totalCompra");
const selectCategoria = document.querySelector("#select-categoria");
const botonAñadir = document.querySelector("#botonAñadir");
const inputPrecio = document.querySelector("#inputPrecio");
const inputNombre = document.querySelector("#inputNombre");

añadirCarrito();
sumar();

function añadirCarrito() {
  botonAñadir.addEventListener("click", () => {
    if (
      inputNombre.value.trim() == "" ||
      Number(inputPrecio.value) == 0 ||
      selectCategoria.value == "Todas las categorías"
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Faltan campos por rellenar",
      });
    } else {
      const elementoCarrito = document.createElement("li");
      elementoCarrito.textContent = `Nombre Producto: ${inputNombre.value} - Precio: ${inputPrecio.value}$`;
      listaProducto.appendChild(elementoCarrito);
      Swal.fire({
        title: "Elemento añadido",
        icon: "success",
        draggable: true,
      });
      limpiarCampos(inputNombre, inputPrecio, selectCategoria);
    }
  });
}

function limpiarCampos() {
  inputNombre.value = "";
  inputPrecio.value = "";
  selectCategoria.value = "";
}

function sumar() {
  botonVertotal.addEventListener("click", () => {
    let suma = 0;
    const preciolista = document.getElementById("#inputPrecio");
    for (let index = 0; index < listaProducto.length; index++) {
      const elementLista = listaProducto[index];
      if (elementLista == Number(preciolista.value)) {
        preciolista += suma;
      }
      totalProducto.value = `Total: ${suma}`;
    }
  });
}
