import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto-projeto',
  imports: [CommonModule],
  templateUrl: './quinto-projeto.html',
  styleUrl: './quinto-projeto.css'
})
export class QuintoProjeto {
  //vetor de nomes
  nomes:string[] = ['Alisson', 'Alexsander', 'André', 'Romulo', 'Daniel'];
}
