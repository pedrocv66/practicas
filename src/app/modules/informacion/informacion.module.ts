import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { CardComponent } from './components/card/card.component';

//componetes de la web -> material     Perrito :)
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    InformacionComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    InformacionComponent,
    CardComponent,
    MatButtonModule,
    MatCardModule
  ],
})
export class InformacionModule { }
