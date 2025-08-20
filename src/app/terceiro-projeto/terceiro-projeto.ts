import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-projeto',
  imports: [],
  templateUrl: './terceiro-projeto.html',
  styleUrl: './terceiro-projeto.css'
})
export class TerceiroProjeto {

  //variavel de imagem
  imagem:string = 'corinthians.jpg';
  foto:string = 'londrina.png';
  imagens:string = 'luverdense.png';
  globo:string = 'globo.webp';
  bahia:string = 'bahia.webp';

  //função para alterar imagem
  alterarImagem(){
    if(this.imagem === 'corinthians.jpg'){
        this.imagem = 'rey_mysterio.jpg';
    }else{
        this.imagem = 'corinthians.jpg';
    }
  }

  mudarFotos(){
    if(this.foto === 'londrina.png'){
      this.foto = 'kane.webp';
    }else{
      this.foto = 'londrina.png';
    }
  }

  localizarImagens(){
    if(this.imagens === 'luverdense.png'){
      this.imagens = 'randy_orton.webp';
    }else{
      this.imagens = 'luverdense.png';
    }
  }

  globoCena(){
    if(this.globo === 'globo.webp'){
      this.globo = 'john_cena.avif';
    }else{
      this.globo = 'globo.webp';
    }
  }

  bahiaUso(){
    if(this.bahia === 'bahia.webp'){
      this.bahia = 'jey_uso.webp';
    }else{
      this.bahia = 'bahia.webp';
    }
  }
}
