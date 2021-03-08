import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaContableComponent } from './list/entrada-contable.component';

const routes: Routes = [{ path: '', component: EntradaContableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaContableRoutingModule {}
