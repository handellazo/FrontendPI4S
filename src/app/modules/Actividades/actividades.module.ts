import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadComponent } from './pages/actividad/actividad.component';


@NgModule({
  declarations: [
    ActividadComponent
  ],
  imports: [
    CommonModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
