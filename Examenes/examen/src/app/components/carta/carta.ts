import { Component, Input } from '@angular/core';
import { Libros } from '../../model/Libros';
import { ImagenesPipe } from '../../pipes/imagenes-pipe';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carta',
  imports: [ImagenesPipe, CommonModule, RouterLink],
  templateUrl: './carta.html',
  styleUrl: './carta.css',
})
export class Carta {
  @Input() item?: Libros;
}
