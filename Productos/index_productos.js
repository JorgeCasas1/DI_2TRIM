document.querySelector(".clase");
document.querySelector("#id");
document.querySelector("tag");
document.querySelector("div.cotenido ul.lista-principal input[type=text]");

// Forma de verificar si funciona mirar si aparece en consola, sino esta bien aparece null
// Declaramos las constantes de los elementos a los elementos que queremos acceder mediante lógica.

// Referencia de mis y id y tag
const inputPrecio = document.querySelector("#input-precio");
const inputDescripcion = document.querySelector("#input-descripcion");
const inputNombre = document.querySelector("#input-nombre");
const selectCategoria = document.querySelector("#select-categoria");
const spanCaracteres = document.querySelector("span");

// Referencia de mi lista de productos cont tag ul
const listaProductos = document.querySelector("ul");

// Evento de tipo click para detectar el boton y aplicar la lógica
botonRegistrar.addEventListener("click", (e) => {
  /*console.log(inputNombre.value);
  console.log(inputPrecio.value);
  console.log(inputDescripcion.value);
  console.log(selectCategoria.value);*/

  // El innerHTML nos sirve para leer el elemento dentro del contenido HTML y poder modificarlo
  const precio = parseFloat(inputPrecio.value);
  // Queremos que se modifique el contador al meter productos en la lista por tanto ponemos let y lo parseamos para que su contenido sea un entero
  let contador = parseInt(spanCaracteres.innerHTML);
  // Convertimos el inputPrecio en Float para poder realizar la validación
  if (inputNombre.value.trim() == "" || precio <= 0 || isNaN(precio)) {
    Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: "Debes rellenar el nombre y un precio válido (mayor a 0)",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  } else {
    listaProductos.innerHTML += `<li class='listaProductos'>${inputNombre.value} - ${inputPrecio.value}$</li>`;
    // Una vez se añada el producto a la lista se suma el contador
    contador++;
    // y se actualiza el valor del html (ej-> 0 a 1)
    spanCaracteres.innerHTML = contador;
    // Sacamos el msj de que el producto se introdujo de manera correcta
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Producto con nombre ${inputNombre.value} añadido correctamente`,
      showConfirmButton: false,
      timer: 2000,
    });

    // Limpiamos los campos
    inputNombre.value = "";
    inputPrecio.value = "";
    inputDescripcion.value = "";
    selectCategoria.value = -1;
  }
});

botonLimpiar.addEventListener("click", (e) => {
  // cuando ponemos listaProductos.innerHTML hacemos referencia a lo que se encuentra dentro.
  if (listaProductos.innerHTML == "") {
    Swal.fire({
      icon: "error",
      title: "¡Error!",
      text: "La lista ya esta vacía",
      timer: 2000,
      showConfirmButton: false,
    });
    return;
  }

  listaProductos.innerHTML = "";
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Lista vaciada correctamente`,
    showConfirmButton: false,
    timer: 2000,
  });
  // Limpiamos los campos
  inputNombre.value = "";
  inputPrecio.value = "";
  inputDescripcion.value = "";
  selectCategoria.value = -1;
});
