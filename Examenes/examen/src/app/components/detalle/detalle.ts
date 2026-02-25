import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Libros } from '../../model/Libros';
import { Gestor } from '../../services/gestor';
import { ActivatedRoute } from '@angular/router';
import { Villain } from '../../model/Villain';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  libroRecuperado?: Libros;
  villanoRecuperado?: Villain;
  datoRecuperado: string = '0';

  constructor(
    private gestorLibros: Gestor,
    private gestorRutas: ActivatedRoute,
  ) {
    this.gestorRutas.paramMap.subscribe((data) => {
      this.datoRecuperado = data.get('id') || '0';
      this.libroRecuperado = this.gestorLibros.obtenerDetalle(Number(this.datoRecuperado));
    });
  }
}
