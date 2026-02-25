import { Component } from '@angular/core';
import { Gestor } from '../../services/gestor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Libros } from '../../model/Libros';
import { Villain } from '../../model/Villain';

@Component({
  selector: 'app-agregar',
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {
  titulo?: string;
  ano?: string;
  paginas?: number;
  villains: Villain[] = [];

  constructor(private gestor: Gestor) {}
  agregar() {
    if (!this.titulo || !this.ano || !this.paginas) {
      Swal.fire({
        title: 'Faltan campos',
        text: 'Rellene todos los campos',
        icon: 'error',
      });
      return;
    }
    let elementoAgregar: Libros = {
      id: 0,
      titulo: this.titulo!!,
      ano: this.ano!!,
      paginas: Number(this.paginas!!),
      villains: this.villains,
    };
    Swal.fire({
      title: 'Agregado con éxito',
      text: 'Agregado',
      icon: 'success',
    });
    this.gestor.agregarLista(elementoAgregar);
  }
}
