import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompartidoModule } from '../compartido/compartido.module';

import { IonicModule } from '@ionic/angular';

import { PagoPageRoutingModule } from './pago-routing.module';

import { PagoPage } from './pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoPageRoutingModule,
    CompartidoModule
  ],
  declarations: [PagoPage]
})
export class PagoPageModule {}
