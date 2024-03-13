import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdvPage } from './pdv.page';

const routes: Routes = [
  {
    path: '',
    component: PdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdvPageRoutingModule {}
