import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemFlashPageRoutingModule } from './item-flash-routing.module';

import { ItemFlashPage } from './item-flash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemFlashPageRoutingModule
  ],
  declarations: [ItemFlashPage]
})
export class ItemFlashPageModule {}
