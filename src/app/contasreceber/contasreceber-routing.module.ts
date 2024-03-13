import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasreceberPage } from './contasreceber.page';

const routes: Routes = [
  {
    path: '',
    component: ContasreceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasreceberPageRoutingModule {}
