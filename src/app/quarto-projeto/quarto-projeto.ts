import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-quarto-projeto',
  imports: [CommonModule],
  templateUrl: './quarto-projeto.html',
  styleUrl: './quarto-projeto.css'
})
export class QuartoProjeto {
  //variavel exibir
  exibir:boolean = true;
  
  //função para exibir ou ocultar o nosso quadrado
  acao(){
    if(this.exibir === true){
      this.exibir = false;
    }else{
      this.exibir = true;
    }
  }
}
