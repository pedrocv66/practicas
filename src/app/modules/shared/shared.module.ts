import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//componentes locales
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//importamos para acceder a todas las rutas de la pagina 
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  //tiene los componentes locales del modulo --> creados por nosotros
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  //archivos, componentes de la web o de otros modulos a los que queremos tener acceso 
  /*archivos de rutas (para el navegador) componentes de material que vienen de internet
  componentes que vienen de otros modulos (por ejemplo una card)
  */
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  //expone los cmponentres locales para que puedan ser mostrados en el resto de la pagina
  // expone componentes de la web para poder tenes acceso a ellos en el propio modulo 
  //locales o de la web se exportan
  exports: [
    NavbarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
