import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompartidoModule } from '../compartido/compartido.module';

import { IonicModule } from '@ionic/angular';

import { PagoExitosoPageRoutingModule } from './pago-exitoso-routing.module';

import { PagoExitosoPage } from './pago-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagoExitosoPageRoutingModule,
    CompartidoModule
  ],
  declarations: [PagoExitosoPage]
})
export class PagoExitosoPageModule {}
