import { Component } from '@angular/core';
import { Carta } from '../carta/carta';
import { Libros } from '../../model/Libros';
import { Gestor } from '../../services/gestor';
import { CommonModule } from '@angular/common';
import { Villain } from '../../model/Villain';

@Component({
  selector: 'app-lista',
  imports: [Carta, CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  lista: Libros[] = [];
  constructor(private gestor: Gestor) {
    this.lista = gestor.obtenerTodas();
  }
}
