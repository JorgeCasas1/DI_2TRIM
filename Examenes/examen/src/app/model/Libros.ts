import { Villain } from './Villain';

export interface Libros {
  id: number;
  ano: string;
  titulo: string;
  villains: Villain[];
  paginas: number;
}
