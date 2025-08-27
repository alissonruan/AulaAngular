import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setimo-projeto',
  imports: [CommonModule],
  templateUrl: './setimo-projeto.html',
  styleUrl: './setimo-projeto.css'
})
export class SetimoProjeto {
  condicao:boolean = true;
  
  //lista de aprovados e reprovados
  lista:string[]=['Aprovado','Recuperacao','Reprovado'];
}
