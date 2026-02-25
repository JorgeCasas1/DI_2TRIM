import { Routes } from '@angular/router';
import { Apphome } from './components/apphome/apphome';
import { List } from './components/list/list';
import { AppAgregar } from './components/appagregar/appagregar';
import { Appdetalle } from './components/appdetalle/appdetalle';
import { Appbuscador } from './components/appbuscador/appbuscador';

export const routes: Routes = [
  { path: 'home', component: Apphome },
  {
    path: 'listar',
    component: List,
  },
  {
    path: 'detalle/:id',
    component: Appdetalle,
  },
  { path: 'agregar', component: AppAgregar },
  {
    path: 'buscar',
    component: Appbuscador,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
