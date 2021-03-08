import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoMonedaComponent } from './list/tipo-moneda.component';

const routes: Routes = [{ path: '', component: TipoMonedaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoMonedaRoutingModule {}
