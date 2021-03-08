import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoMonedaFormComponent } from './form/tipo-moneda-form.component';
import { TipoMonedaComponent } from './list/tipo-moneda.component';
import { TipoMonedaResolver } from './tipo-moneda.resolver';

const routes: Routes = [
  { path: '', component: TipoMonedaComponent },
  { path: 'add', component: TipoMonedaFormComponent },
  {
    path: 'edit/:id',
    component: TipoMonedaFormComponent,
    resolve: { data: TipoMonedaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoMonedaRoutingModule {}
