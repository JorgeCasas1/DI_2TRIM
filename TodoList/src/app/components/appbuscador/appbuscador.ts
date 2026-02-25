import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../model/Tarea';
import { TareasGestor } from '../../services/tareas-gestor';
import { CommonModule } from '@angular/common';
import { CartaTarea } from '../carta-tarea/carta-tarea';

@Component({
  selector: 'app-appbuscador',
  imports: [FormsModule, CommonModule, CartaTarea],
  templateUrl: './appbuscador.html',
  styleUrl: './appbuscador.css',
})
export class Appbuscador {
  buscando = false;
  prioridad?: number;
  tareas: Tarea[] = [];

  constructor(private gestor: TareasGestor) {}

  realizarBusqueda() {
    this.buscando = true;
    this.tareas = this.gestor.getTareasPrioridad(this.prioridad!!);
  }
}
