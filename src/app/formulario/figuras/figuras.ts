import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  figuraseleccionada: string= 'triangulo';

  valor1: number=0;
  valor2: number=0;

  resultadoarea: number | null= null;
  resultadoperimetro: number | null = null;

  Calcular(){
    switch (figuraseleccionada) {
      case 'triangulo':
        this.resultadoarea = (this.valor1 * this.valor2)/2;
        this.resultadoperimetro = this.valor1 * 3;
        break;

        case 'circulo':
        this.resultadoarea = Math.PI * Math.pow(this.valor1, 2);
        this.resultadoperimetro = 2 * Math.PI * this.valor1;
        break;

        case 'Cuadrado':
        this.resultadoarea = Math.pow(this.valor1, 2);
        this.resultadoperimetro = this.valor1 * 4;
        break;

        case 'Rectangulo':
        this.resultadoarea = this.valor1 * this.valor2;
        this.resultadoperimetro = (this.valor1 * 2) + (this.valor2 * 2);
        break;

        case 'Pentagono':
       this.resultadoperimetro = this.valor1 * 5; 
        this.resultadoarea = (this.resultadoPerimetro * this.valor2) / 2;
        break;
    
      default:
        break;
    }
  }
}
