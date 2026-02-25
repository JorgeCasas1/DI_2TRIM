import { Injectable } from '@angular/core';
import { Libros } from '../model/Libros';

@Injectable({
  providedIn: 'root',
})
export class Gestor {
  private lista: Libros[] = [];
  private contador: number = 0;

  public agregarLista(objetoAgregar: Libros) {
    this.contador += 1;
    objetoAgregar.id = this.contador;
    this.lista.push(objetoAgregar);
  }

  public obtenerTodas(): Libros[] {
    return this.lista;
  }

  public obtenerDetalle(id: number) {
    return this.lista.find((item) => item.id == id);
  }
}
