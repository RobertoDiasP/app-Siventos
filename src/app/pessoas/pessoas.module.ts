import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PessoasPageRoutingModule } from './pessoas-routing.module';

import { PessoasPage } from './pessoas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PessoasPageRoutingModule
  ],
  declarations: [PessoasPage]
})
export class PessoasPageModule {}
