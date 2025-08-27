import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SegundoProjeto } from './segundo-projeto/segundo-projeto';
import { TerceiroProjeto } from "./terceiro-projeto/terceiro-projeto";
import { QuartoProjeto } from "./quarto-projeto/quarto-projeto";
import { QuintoProjeto } from "./quinto-projeto/quinto-projeto";
import { SextoProjeto } from "./sexto-projeto/sexto-projeto";
import { SetimoProjeto } from './setimo-projeto/setimo-projeto';
import { OitavoProjeto } from "./oitavo-projeto/oitavo-projeto";

@Component({
  selector: 'app-root',
  
  imports:
  [RouterOutlet, SegundoProjeto, TerceiroProjeto, 
  QuartoProjeto, QuintoProjeto, SextoProjeto,
  SetimoProjeto, OitavoProjeto],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('segundo-projeto');
}
