import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContaspagarPageRoutingModule } from './contaspagar-routing.module';

import { ContaspagarPage } from './contaspagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContaspagarPageRoutingModule
  ],
  declarations: [ContaspagarPage]
})
export class ContaspagarPageModule {}
