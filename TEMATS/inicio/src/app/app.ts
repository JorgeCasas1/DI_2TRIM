import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('inicio');
  nombre? = '';
  apellido? = '';
  nota? = 0;
  imagen = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png';
  procesarRespuesta(nombre: string, apellido: string, nota: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = Number(nota);
  }
}
