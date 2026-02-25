import { Component } from '@angular/core';
import { Libros } from '../../model/Libros';
import { Villain } from '../../model/Villain';
import { Carta } from '../carta/carta';
import Swal from 'sweetalert2';
import { Gestor } from '../../services/gestor';

@Component({
  selector: 'app-carrito',
  imports: [Carta],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  lista: Libros[] = [];
  listaVillanos: Villain[] = [];
  titulo?: string;
  ano?: string;
  paginas?: number;
}
