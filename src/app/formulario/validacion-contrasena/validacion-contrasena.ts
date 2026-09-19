import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion-contrasena',
  standalone: false,
  styleUrl: './validacion-contrasena.css',
  templateUrl: './validacion-contrasena.html',
})
export class ValidacionContrasena {

  usuario: string = 'admin123';
  contrasena: string = '12345';

  ingresarUsuaio: string = '';
  ingresarContrasena: string ='';

  mensaje: string = '';

  validar(){
    if(this.ingresarUsuaio === this.usuario){
      if(this.ingresarContrasena === this.contrasena){
        this.mensaje = 'Bienvenido al sistema';
      }else{
        this.mensaje = 'La contrasena no es valido';
      }
    }else{
      this.mensaje = 'El usuario no es valido';
    }
  }
}
