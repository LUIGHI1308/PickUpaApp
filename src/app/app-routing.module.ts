import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registrocli',
    loadChildren: () => import('./pages/registrocli/registrocli.module').then( m => m.RegistrocliPageModule)
  },
  {
    path: 'registrocond',
    loadChildren: () => import('./pages/registrocond/registrocond.module').then( m => m.RegistrocondPageModule)
  },
  {
    path: 'registrotipo',
    loadChildren: () => import('./pages/registrotipo/registrotipo.module').then( m => m.RegistrotipoPageModule)
  },
  {
    path: 'center',
    loadChildren: () => import('./pages/center/center.module').then( m => m.CenterPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'tarifa',
    loadChildren: () => import('./pages/tarifa/tarifa.module').then( m => m.TarifaPageModule)
  },
  {
    path: 'encuentro',
    loadChildren: () => import('./pages/encuentro/encuentro.module').then( m => m.EncuentroPageModule)
  },
  {
    path: 'pago',
    loadChildren: () => import('./pages/pago/pago.module').then( m => m.PagoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
