import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrocondPageRoutingModule } from './registrocond-routing.module';

import { RegistrocondPage } from './registrocond.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrocondPageRoutingModule
  ],
  declarations: [RegistrocondPage]
})
export class RegistrocondPageModule {}
