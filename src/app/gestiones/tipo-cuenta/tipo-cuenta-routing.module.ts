import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCuentaFormComponent } from './form/tipo-cuenta-form.component';
import { TipoCuentaComponent } from './list/tipo-cuenta.component';
import { TipoCuentaResolver } from './tipo-cuenta.resolver';

const routes: Routes = [
  { path: '', component: TipoCuentaComponent },
  { path: 'add', component: TipoCuentaFormComponent },
  {
    path: 'edit/:id',
    component: TipoCuentaFormComponent,
    resolve: { data: TipoCuentaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoCuentaRoutingModule {}
