import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionModule } from "../informacion/informacion.module";

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    InformacionModule
],
  exports: [
    InicioComponent,
  ],
})
export class InicioModule { }
