import { Component } from '@angular/core';
import { Tarea } from '../../model/Tarea';
import { CommonModule } from '@angular/common';
import { TareasGestor } from '../../services/tareas-gestor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './appdetalle.html',
  styleUrl: './appdetalle.css',
})
export class Appdetalle {
  tarea?: Tarea;
  recuperado: string = '0';

  constructor(
    private gestorTareas: TareasGestor,
    private gestorRutas: ActivatedRoute,
  ) {
    this.gestorRutas.paramMap.subscribe((data) => {
      this.recuperado = data.get('id') ?? '-1';
      this.tarea = this.gestorTareas.getTareasById(Number(this.recuperado));
    });
  }
}
