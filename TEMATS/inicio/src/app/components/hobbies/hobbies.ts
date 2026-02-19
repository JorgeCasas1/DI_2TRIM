import { Component } from '@angular/core';
import { hobbieintf } from '../../model/hobbieintf';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hobbies',
  imports: [FormsModule],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
})
export class Hobbies {
  // Iniciamos con valores por defecto
  nombre: string = '';
  nivel: number = 0;
  fecha: string = '';
  // tipamos como hobbieintf un array -> dentro de este deberá teneer como parámetros -> nombre, fecha, nivel.
  listaHobbies: hobbieintf[] = [];

  agregarHobbie() {
    // Validamos que existan valores y que no sean solo espacios
    if (this.nombre.trim().length > 0 && this.fecha.trim().length && this.nivel > 0) {
      // Añadimos el objeto a la lista
      this.listaHobbies.push({
        nombre: this.nombre,
        nivel: this.nivel,
        fecha: this.fecha,
      });

      Swal.fire({
        title: '¡Éxito!',
        text: 'Hobbie añadido',
        icon: 'success',
      });

      // Limpiamos DESPUÉS de añadir a la lista

      this.nombre = '';
      this.fecha = '';
      this.nivel = 0;
    } else {
      Swal.fire({
        title: 'Formulario incompleto',
        text: 'Asegúrate de poner un nombre, una fecha y un nivel mayor a 0',
        icon: 'error',
      });
    }
  }
}

/*

  Crear un formulario para poder incluir un hoobbie dentro de una lista. Un hobbie tiene como elementos 
  nombre(string), nivel(int), fecha (date).

  - Cada vez que se pulse el boton agregar se realiza una confirmacion
  - Cada vez que agrego un hobbie se lleve un array
  
  */
