import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Tareas } from './components/tareas/tareas';
import { Hobbies } from './components/hobbies/hobbies';

// definimos las rutas que queremos navegar dentro de la aplicacion
export const routes: Routes = [
  // Debe estar en orden porque sino navegara al primero
  { path: 'home', component: Home },
  { path: 'hobbies', component: Hobbies },
  { path: 'tareas', component: Tareas },
  //: indica que se le pasa un parametro por la url no una ruta
  { path: 'tareas/:id', component: Tareas },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
