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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionesRoutingModule {}
