import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  heroes: any[]=[
  {
    imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:'goku',
    Descripcion:'kame kame ha',
    race:'saiyan',
    ki:9000 
  },
  { 
    imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:'piccolo',
    Descripcion:'Makankosappo',
    race:'Namek',
    ki:8000
  },
  {
    imagen:"https://dragonball-api.com/characters/Freezer.webp",
    nombre:'Vegeta',
    Descripcion:'Final Flash',
    rece:'Saiyan',
    ki:8500
  },
  {
    imagen:"https://dragonball-api.com/characters/Freezer.webp",
    nombre:'Frezeer',
    Descripcion:'Death Ball',
    race:'Alien',
    ki:9500
  }
]
}
