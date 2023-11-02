import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvenioComponent } from './pages/convenio/convenio.component';
import { ListaConvenioComponent } from './lista-convenio/lista-convenio.component';

const routes: Routes = [
  {
    path:'',
    component:ConvenioComponent,
    outlet:"child"
  },
  {path: 'convenio',component:ListaConvenioComponent},
  {path:'',redirectTo:'convenio',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class ConveniosRoutingModule { }
