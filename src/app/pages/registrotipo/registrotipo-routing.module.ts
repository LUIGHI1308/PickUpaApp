import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrotipoPage } from './registrotipo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrotipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrotipoPageRoutingModule {}
