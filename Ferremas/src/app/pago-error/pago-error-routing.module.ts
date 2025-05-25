import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoErrorPage } from './pago-error.page';

const routes: Routes = [
  {
    path: '',
    component: PagoErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagoErrorPageRoutingModule {}
