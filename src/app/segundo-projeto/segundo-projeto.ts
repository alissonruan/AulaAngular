import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-segundo-projeto',
  imports: [RouterOutlet, SegundoProjeto],
  templateUrl: './segundo-projeto.html',
  styleUrl: './segundo-projeto.css'
})
export class SegundoProjeto {

  //função mensagem
  Mensagem(){
    alert('Hello World!');
  }

  Alerta(){
    alert('The Rock said: SHUT UP BITCH');
  }

  AlertaCorinthiana(){
    alert('PALMEIRAS N TEM MUNDIAL');
  }

  Helton(){
    alert('Senhores, Deu!');
  }

  Dx(){
    alert('Are You Ready?');
  }
}
