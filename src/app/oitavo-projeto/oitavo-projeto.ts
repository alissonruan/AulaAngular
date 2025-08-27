import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oitavo-projeto',
  imports: [CommonModule],
  templateUrl: './oitavo-projeto.html',
  styleUrl: './oitavo-projeto.css'
})

export class OitavoProjeto {
//lista variavel de media
  lista:string[]=['Aprovado','Reprovado','Aprovado'];
  media:number = 8;

//laços de repetição
nomes:string[]=['Alisson', 'Angélica', 'Danilo', 'Dudu']

//linguagem
linguagem:string = 'JS';
}