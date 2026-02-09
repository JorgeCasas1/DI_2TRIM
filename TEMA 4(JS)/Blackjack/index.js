let palos = ["C", "D", "T", "P"];
let baraja = [];
let puntosTtoales = 0;

const botonSacar = document.querySelector("#btn-sacar");
const botonPlantarse = document.querySelector("#btn-plantarse");
const contenedorCartas = document.querySelector("#jugador-cartas");
const textoPuntos = document.querySelector("#puntos-jugador");

for (let index = 0; index < palos.length; index++) {
  const palo = palos[index];
  for (let index1 = 1; index1 < 14; index1++) {
    switch (index1) {
      case 1:
        baraja.push(new Carta(`A${palo}`));
        break;
      case 11:
        baraja.push(new Carta(`J${palo}`));
        break;
      case 12:
        baraja.push(new Carta(`Q${palo}`));
        break;
      case 13:
        baraja.push(new Carta(`K${palo}`));
        break;
      default:
        baraja.push(new Carta(`${index1}${palo}`));
        break;
    }
  }
}

// console.log(baraja);
// Necesito una referencia del boton del html
// Es const pq nunca cambia
// hace referencia al index.html
// queryselector
// .clase
// #identidicador

baraja = _.shuffle(baraja);
botonSacar.addEventListener("click", (e) => {
  let cartaEncontrada = baraja.pop();
  if (cartaEncontrada) {
    puntosTtoales += cartaEncontrada.getValor();
    textoPuntos.innerHTML = puntosTtoales;
    contenedorCartas.append(cartaEncontrada.crearElementoHTML());
    if (puntosTtoales == 21) {
      Swal.fire("¡Blackjack!", "Has ganado", "success");
      botonPlantarse.disabled = true;
      botonSacar.disabled = true;
    }
    if (puntosTtoales > 21) {
      Swal.fire("Has perdido", `Puntos: ${puntosTtoales}`, "error");
      botonPlantarse.disabled = true;
      botonSacar.disabled = true;
    }
  }
});
botonPlantarse.addEventListener("click", () => {
  Swal.fire("Te has plantado", `Puntuación final: ${puntosTtoales}`, "info");
  botonPlantarse.disabled = true;
  botonSacar.disabled = true;
});
