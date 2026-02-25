import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Hobbies } from './components/hobbies/hobbies';
import { Tareas } from './components/tareas/tareas';
import { CommonModule } from '@angular/common';

@Component({
  // modulos para pasar datos -> FormsModule, RouterOutlet, RouterLinkWithHref, CommonModule
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterLinkWithHref, CommonModule], // me permite utilizar ngModel en la parte del html
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // logica de respuesta en nuestro html
  // importamos @angular/router
  constructor(private gestorRutas: Router) {}
  // Declaramos el método navegar
  navegar() {
    this.gestorRutas.navigate;
    ['tareas'];
  }
}
