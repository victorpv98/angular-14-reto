import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {

  // Ejemplo01 - Comunicacion Padre - Hijo
  datos_padre: string = "";

  // Metodo que recepcione el resulatdo del evento del hijo
  // datos_hijo: string="";
  // RecibirMensaje1(info:string){
  //   this.datos_hijo = info;
  // }
}
