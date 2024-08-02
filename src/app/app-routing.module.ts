import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './modules/informacion/pages/informacion/informacion.component';

const routes: Routes = [
  /*definimos la ruta raiz (primera vista visible al reenderizar la pagina ) 
  a Inicio Component */
  {
    path:"", component: InformacionComponent
  },
  /*las cargas perezosas reenderiza un modulo completo unicamente cuando queremos acceder a ellos 
  provocando que nuestra pagina sea mas rapida porque solo cargara los componentes de ese modulo
  en especifico*/
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/informacion/informacion.module').then(m=>m.InformacionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
