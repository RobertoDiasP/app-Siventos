import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaPaginaPage } from './nova-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: NovaPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaPaginaPageRoutingModule {}
