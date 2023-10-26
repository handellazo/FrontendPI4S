import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'welcome',
    loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path:'convenio',
    loadChildren: () => import('../Convenio/convenio.module').then(m => m.ConvenioModule)
  },
  {
    path:'proyecto',
    loadChildren: () => import('../Proyecto/proyecto.module').then(m => m.ProyectoModule)
  },
  {
    path:'difusion',
    loadChildren: () => import('../Difusion/difusion.module').then(m => m.DifusionModule)
  },
  {
    path:'actividad',
    loadChildren: () => import('../Actividades/actividades.module').then(m => m.ActividadesModule)
  },
  // {
  //   path:'*',
  //   loadChildren: () => import('').then(m => m.DifusionModule)
  // },

 {
    path:'**',
    redirectTo:'welcome'
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
