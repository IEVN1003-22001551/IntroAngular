import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title:string= `Francisco Antonio Mendez Aguirre`
  
  duplicarNumero(a:number):number{
    return a*2
  }
pelicula={
  titulo: `spiderman`,
  fechadelanzamineto: new Date(),
  precio: 2355
}

}
