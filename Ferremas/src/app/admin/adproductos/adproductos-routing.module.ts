import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdproductosPage } from './adproductos.page';

const routes: Routes = [
  {
    path: '',
    component: AdproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdproductosPageRoutingModule {}
