import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompartidoModule } from '../../compartido/compartido.module';

import { IonicModule } from '@ionic/angular';

import { AdproductosPageRoutingModule } from './adproductos-routing.module';

import { AdproductosPage } from './adproductos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdproductosPageRoutingModule,
    CompartidoModule
  ],
  declarations: [AdproductosPage]
})
export class AdproductosPageModule {}
