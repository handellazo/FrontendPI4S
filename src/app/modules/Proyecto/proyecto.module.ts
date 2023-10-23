import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { ProyectoRoutingModule } from '../Proyecto/proyecto-routing.module';




@NgModule({
  declarations: [
    ProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule
  ]
})
export class ProyectoModule { }
