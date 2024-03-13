import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluxocaixaPage } from './fluxocaixa.page';

const routes: Routes = [
  {
    path: '',
    component: FluxocaixaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluxocaixaPageRoutingModule {}
