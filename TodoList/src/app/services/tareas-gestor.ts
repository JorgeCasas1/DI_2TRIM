import { Injectable } from '@angular/core';
import { Tarea } from '../model/Tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasGestor {
  //Recibe todos los datos del formulario
  // Lista de tarea vacia
  private listaTareas: Tarea[] = [];
  private contador: number = 0;

  // Creamos metodo de agregar tareas

  public addTarea(tarea: Tarea) {
    this.contador += 1;
    // Incremanta el id
    tarea.id = this.contador;
    this.listaTareas.push(tarea);
  }
  public getAllTareas(): Tarea[] {
    return this.listaTareas;
  }
  public getTareasPrioridad(prioridad: number) {
    return this.listaTareas.filter((item) => item.prioridad == prioridad);
  }
  public getTareasById(id: number): Tarea | undefined {
    return this.listaTareas.find((item) => item.id == id);
  }
}
