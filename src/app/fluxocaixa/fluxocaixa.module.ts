import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluxocaixaPageRoutingModule } from './fluxocaixa-routing.module';

import { FluxocaixaPage } from './fluxocaixa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluxocaixaPageRoutingModule
  ],
  declarations: [FluxocaixaPage]
})
export class FluxocaixaPageModule {}
