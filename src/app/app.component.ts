import { Component } from '@angular/core';
import { Conversao } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Conversor de Medidas';

  conversao = new Conversao();

  constructor() {}

  public km = 0;
  public m = 0;
  public cm = 0;
  public mm = 0;
}
