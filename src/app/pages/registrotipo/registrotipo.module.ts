import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrotipoPageRoutingModule } from './registrotipo-routing.module';

import { RegistrotipoPage } from './registrotipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrotipoPageRoutingModule
  ],
  declarations: [RegistrotipoPage]
})
export class RegistrotipoPageModule {}
