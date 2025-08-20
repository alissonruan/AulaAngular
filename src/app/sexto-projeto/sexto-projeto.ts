import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto-projeto',
  imports: [CommonModule],
  templateUrl: './sexto-projeto.html',
  styleUrl: './sexto-projeto.css'
})
export class SextoProjeto {
  //variavel contendo uma linguagem de programação
  linguagem:string = 'HTML';
}
