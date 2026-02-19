export class hobbieclass {
  constructor(
    private nombre?: string | undefined,
    private nivel?: number | undefined,
    private fecha?: string | undefined,
  ) {}

  // Esta forma si tenemos muchos metodos
  // metodos -> no hace falta poner fun

  getNombre() {
    return this.nombre;
  }
  getNivel() {
    return this.nivel;
  }
  getFecha() {
    return this.fecha;
  }
}

// Se pone export para utilizar en otros ficheros
