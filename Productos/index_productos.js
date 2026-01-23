// document.getElementById("id") -> HTML
// document.getElementById("btn") -> HTML
// document.getElementById("button") -> HTML
// let botones = document.getElementsByClassName("btn") -> HTML ELEMENT -> LIST
document.querySelector(".clase");
document.querySelector("#id");
document.querySelector("tag");
document.querySelector("div.cotenido ul.lista-principal input[type=text]");

// Sólo se obtiene la primera concurrencia en cascada que coincida con lo que le he pedido
const botonRegistrar = document.querySelector("#boton-registrar");
console.log(botonRegistrar);

// Forma de verificar si funciona mirar si aparece en consola, sino esta bien aparece null
const inputPrecio = document.querySelector("#input-precio");
const inputDescripcion = document.querySelector("#input-descripcion");
const inputNombre = document.querySelector("#input-nombre");
const selectCategoria = document.querySelector("#select-categoria");
const spanCaracteres = document.querySelector("span");

// Referencia de mi lista de productos
const listaProductos = document.querySelector("ul");

botonRegistrar.addEventListener("click", (e) => {
  console.log(inputNombre.value);
  console.log(inputPrecio.value);
  console.log(inputDescripcion.value);
  console.log(selectCategoria.value);
});

// añadir a la lista -> <li>asdasd</li>
listaProductos.innerHTML += `<li class='list-group-item'>${inputNombre.value} - ${inputPrecio.value}</li>`;
// mediante swAlerts avisar de que el producto con nombre XX añadido correctamente
// desaparece a las 2seg
// todos los campos se limpian
// no
// lanza un dialogo de error con swAlerts
