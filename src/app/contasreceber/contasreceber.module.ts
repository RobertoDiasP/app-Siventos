import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasreceberPageRoutingModule } from './contasreceber-routing.module';

import { ContasreceberPage } from './contasreceber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasreceberPageRoutingModule
  ],
  declarations: [ContasreceberPage]
})
export class ContasreceberPageModule {}
