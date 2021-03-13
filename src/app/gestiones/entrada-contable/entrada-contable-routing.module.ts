import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaContableResolver } from './entrada-contable.resolver';
import { EntradaContableFormComponent } from './form/entrada-contable-form.component';
import { EntradaContableComponent } from './list/entrada-contable.component';

const routes: Routes = [
  { path: '', component: EntradaContableComponent },
  { path: 'add', component: EntradaContableFormComponent },
  {
    path: 'edit/:id',
    component: EntradaContableFormComponent,
    resolve: { data: EntradaContableResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaContableRoutingModule {}
