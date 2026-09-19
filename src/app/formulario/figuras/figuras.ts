import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  figuraSeleccionada: string = 'triangulo';

  valor1: number = 0;
  valor2: number = 0;

  resultadoArea: number | null = null;
  resultadoPerimetro: number | null = null;

  Calcular() {
    switch (this.figuraSeleccionada) {
      case 'triangulo':
        this.resultadoArea = (this.valor1 * this.valor2) / 2;
        this.resultadoPerimetro = this.valor1 * 3;
        break;

      case 'circulo':
        this.resultadoArea = Math.PI * Math.pow(this.valor1, 2);
        this.resultadoPerimetro = 2 * Math.PI * this.valor1;
        break;

      case 'cuadrado':
        this.resultadoArea = Math.pow(this.valor1, 2);
        this.resultadoPerimetro = this.valor1 * 4;
        break;

      case 'rectangulo':
        this.resultadoArea = this.valor1 * this.valor2;
        this.resultadoPerimetro = this.valor1 * 2 + this.valor2 * 2;
        break;

      case 'pentagono':
        this.resultadoPerimetro = this.valor1 * 5;
        this.resultadoArea = (this.resultadoPerimetro * this.valor2) / 2;
        break;

      default:
        this.resultadoArea = null;
        this.resultadoPerimetro = null;
        break;
    }
  }
}
