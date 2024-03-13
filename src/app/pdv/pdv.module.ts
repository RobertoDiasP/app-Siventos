import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdvPageRoutingModule } from './pdv-routing.module';

import { PdvPage } from './pdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdvPageRoutingModule
  ],
  declarations: [PdvPage]
})
export class PdvPageModule {}
