import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../../model/Tarea';
import { TareasGestor } from '../../services/tareas-gestor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  imports: [FormsModule],
  templateUrl: './appagregar.html',
  styleUrl: './appagregar.css',
})
export class AppAgregar {
  titulo?: string;
  responsable?: string;
  fecha?: string;
  prioridad?: number; // 1-baja // 2-media // 3-alta

  constructor(private gestor: TareasGestor) {}

  procesarTarea() {
    // 1. COMPROBACIÓN (Guardia)
    if (!this.titulo || !this.responsable || !this.fecha || !this.prioridad) {
      Swal.fire('Error', 'Faltan campos', 'error');
      return; // Si falta algo, el código de abajo NUNCA se ejecuta
    }

    // 2. CREACIÓN (Aquí va tu bloque let)
    // Como ya comprobamos arriba que existen, el !! es seguro
    let tarea: Tarea = {
      id: 0, // Mejor que 0 para evitar duplicados
      titulo: this.titulo!!,
      responsable: this.responsable!!,
      fecha: this.fecha!!,
      prioridad: Number(this.prioridad!!),
    };

    // 3. ACCIÓN
    this.gestor.addTarea(tarea);
    Swal.fire('Éxito', 'Tarea añadida', 'success');
  }
}
