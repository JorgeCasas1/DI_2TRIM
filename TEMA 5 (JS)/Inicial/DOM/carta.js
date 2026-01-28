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
    this.valor = representacion.substring(0, representacion.length - 1);
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
}
