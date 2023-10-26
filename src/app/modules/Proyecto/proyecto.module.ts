import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';
import { ProyectoRoutingModule } from '../Proyecto/proyecto-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    ProyectoComponent,
 
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    // MatTableDataSource,
    MatTableModule
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProyectoModule { }
