import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { Hobbies } from './components/hobbies/hobbies';
import { Tareas } from './components/tareas/tareas';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet], // me permite utilizar ngModel en la parte del html
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // logica de respuesta en nuestro html
}
