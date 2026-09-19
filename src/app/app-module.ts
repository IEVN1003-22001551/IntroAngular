import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Figuras } from './formulario/figuras/figuras';
import { Palindromo } from './formulario/palindromo/palindromo';
import { ValidacionContrasena } from './formulario/validacion-contrasena/validacion-contrasena';
import { Trespuntos } from './formulario/trespuntos/trespuntos';

@NgModule({
  declarations: [App, Figuras, Palindromo, ValidacionContrasena, Trespuntos],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
