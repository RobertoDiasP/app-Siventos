import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaPaginaPageRoutingModule } from './nova-pagina-routing.module';

import { NovaPaginaPage } from './nova-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaPaginaPageRoutingModule
  ],
  declarations: [NovaPaginaPage]
})
export class NovaPaginaPageModule {}
