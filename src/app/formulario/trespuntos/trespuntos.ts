import { Component } from '@angular/core';

@Component({
  selector: 'app-trespuntos',
  standalone: false,
  styleUrl: './trespuntos.css',
  templateUrl: './trespuntos.html',
})
export class Trespuntos {
  x1: number = 0;
  x2: number = 0;
  x3: number = 0;
  y1: number = 0;
  y2: number = 0;
  y3: number = 0;

  mensaje: string = '';
  areaTriangulo: number = 0;
  mostrarResultado: boolean = false; 

 
  analizarPuntos() {
    
    let operacion = (this.x1 * (this.y2 - this.y3) + this.x2 * (this.y3 - this.y1) + this.x3 * (this.y1 - this.y2)) / 2;
    
    let areaCalculada = Math.abs(operacion);

    if (areaCalculada === 0) {
      this.mensaje = 'Los tres puntos no forman un triángulo porque son colineales.';
      this.areaTriangulo = 0; 
    } else {
      this.mensaje = 'Los puntos forman un triángulo.';
      this.areaTriangulo = areaCalculada;
    }

  
    this.mostrarResultado = true;
}
}