import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { ConvenioComponent } from './pages/convenio/convenio.component';
import { FormConvenioComponent } from './pages/components/form-convenio/form-convenio.component';
import { OptionsComponent } from './pages/components/options/options.component';
import { ConvenioRoutingModule } from './convenio-routing.module';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    ConvenioComponent,
  
    FormConvenioComponent,
       OptionsComponent
  ],
  imports: [
    CommonModule,
    ConvenioRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ConvenioModule { }
