import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  frase: string = '';
  vocales: number = 0;
  consonantes: number = 0;
  mensaje: string = '';

  analizar() {
  this.vocales = 0;
  this.consonantes=0;
  let textoLimpio = '' ;
  let textoAlReves = '' ;

  for(let letra of this.frase){
    if(letra !== ' '){
      textoLimpio = textoLimpio + letra;
      textoAlReves = letra + textoAlReves;
      if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')
      {this.vocales = this.vocales +1;
      }else{
        this.consonantes = this.consonantes +1;
      }
    }
  }
  if(textoLimpio === textoAlReves && textoLimpio !==''){
    this.mensaje = 'si es un palindromo';
  }else{
    this.mensaje = 'no es un palindromo';
  }
}
}

