import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrocondPage } from './registrocond.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrocondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrocondPageRoutingModule {}
