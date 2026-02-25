import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tareas',
  imports: [CommonModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  // logica para recuperar dato si es true lo saco el parrafo de la logica del html
  recuperado = true;
  datoRecuperado?: string;

  constructor(private gestorRutasActivas: ActivatedRoute) {}
  ngOnInit(): void {
    this.recuperado = true;
    // Acceso directo al valor en el momento de la carga si no existe pone undefined
    this.datoRecuperado = this.gestorRutasActivas.snapshot.paramMap.get('id') ?? undefined;
  }
}

// 1. CREAR PROYECTO LLAMADO TODOLIST
// 2. COMPONENT
// APPROOT//APPTAREA//APPTAREAS(2)//APPBUSCADOR(3)//APPAGREGAR(1) //APPHOME (4)// APPDETALLE
// 3. NAVEGABLE TODO MENOS APPTAREA
// 4. LANDING -> PAGINA DE INICIO
// 1. FORMULARIO ADD TAREA -> ID,TITULO, RESPONSABLE, FECHA,PRIORIDAD (ALTA,BAJA,MEDIA)
// 2. LISTA CARTAS -> DONDE MUESTRAN TAREAS
// 3. DATOS DE UNA TAREA

// comando para crear proyecto ng new nombreProyecto --skip-tests
// ng g c components/nombre
// ssr:yes
// ccs
// NO AGENT
