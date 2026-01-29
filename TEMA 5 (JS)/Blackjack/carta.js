class Carta {
  // let sirve para marcar variables de bloque
  // atributos
  imagen;
  valor;
  representacion;
  // contructores
  constructor(representacion) {
    // Metemos la url en el constructor
    this.imagen = "./images/" + representacion + ".png";
    this.representacion = representacion;

    let valorExtraido = representacion.substring(0, representacion.length - 1);

    if (isNaN(valorExtraido)) {
      if (valorExtraido == "A") {
        this.valor = 11;
      } else {
        // Si es J,K,Q -> le damos 10 de valor
        this.valor = 10;
      }
    } else {
      // si es valor del 2-10
      this.valor = Number(valorExtraido);
    }
  }

  // metodos
  mostrarDatos() {
    console.log(this.imagen);
    console.log(this.valor);
    console.log(this.representacion);
  }

  getValor() {
    return this.valor;
  }

  setValor(valor) {
    this.valor = valor;
  }

  crearElementoHTML() {
    const img = document.createElement("img");
    img.src = this.imagen;
    img.classList.add("carta");
    img.alt = this.representacion;
    return img;
  }
}
