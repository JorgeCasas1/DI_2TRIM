import { Routes } from '@angular/router';
import { Agregar } from './components/agregar/agregar';
import { Home } from './components/home/home';
import { Lista } from './components/lista/lista';
import { Carrito } from './components/carrito/carrito';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'agregar', component: Agregar },
  { path: 'listar', component: Lista },
  { path: 'carrito', component: Carrito },
  { path: 'detalle/:id', component: Detalle },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
