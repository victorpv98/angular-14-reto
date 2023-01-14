import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo1',
  templateUrl: './componente-hijo1.component.html',
  styleUrls: ['./componente-hijo1.component.css']
})
export class ComponenteHijo1Component {

  // Ejemplo01 - Atributo que recepcione datos del PADRE
  @Input() mensaje_padre:string="";

  
  // Ejemplo - Comunicacion Hijo - Padre

  // datos a enviar al componente padre
  // datos_hijo:string ="";

  // Evento que sera reconocido por el componete padre
  // @Output() envio1: EventEmitter<string> = new EventEmitter<string>();

  // EnviarMensaje1(){
  //   this.envio1.emit(this.datos_hijo);
  // }


}

