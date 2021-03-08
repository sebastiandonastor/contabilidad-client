import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tipo-cuenta' },
  {
    path: 'tipo-cuenta',
    loadChildren: () =>
      import('./tipo-cuenta/tipo-cuenta.module').then(
        (m) => m.TipoCuentaModule
      ),
  },
  {
    path: 'auxiliar',
    loadChildren: () =>
      import('./auxiliar/auxiliar.module').then((m) => m.AuxiliarModule),
  },
  {
    path: 'cuenta-contable',
    loadChildren: () =>
      import('./cuenta-contable/cuenta-contable.module').then(
        (m) => m.CuentaContableModule
      ),
  },
  {
    path: 'tipo-moneda',
    loadChildren: () =>
      import('./tipo-moneda/tipo-moneda.module').then(
        (m) => m.TipoMonedaModule
      ),
  },
  {
    path: 'entrada-contable',
    loadChildren: () =>
      import('./entrada-contable/entrada-contable.module').then(
        (m) => m.EntradaContableModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionesRoutingModule {}
