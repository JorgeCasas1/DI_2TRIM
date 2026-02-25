import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-root',
  imports: [RouterLinkWithHref, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('examen');
}
