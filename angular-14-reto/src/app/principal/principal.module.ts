import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteHijo1Component } from './componente-hijo1/componente-hijo1.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComponentePadreComponent,
    ComponenteHijo1Component,
    ComponenteHijo2Component
  ],
  imports: [
    CommonModule, 
    FormsModule
  ], exports:[
    ComponentePadreComponent,
    ComponenteHijo1Component,
    ComponenteHijo2Component
  ]
})
export class PrincipalModule { }
