import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemFlashPage } from './item-flash.page';

const routes: Routes = [
  {
    path: '',
    component: ItemFlashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemFlashPageRoutingModule {}
