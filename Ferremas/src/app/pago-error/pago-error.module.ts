import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompartidoModule } from '../compartido/compartido.module';

import { IonicModule } from '@ionic/angular';

import { PagoErrorPageRoutingModule } from './pago-error-routing.module';

import { PagoErrorPage } from './pago-error.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoErrorPageRoutingModule,
    CompartidoModule
  ],
  declarations: [PagoErrorPage]
})
export class PagoErrorPageModule {}
