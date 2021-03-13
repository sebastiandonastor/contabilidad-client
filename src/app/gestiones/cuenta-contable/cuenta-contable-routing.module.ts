import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { CuentaContableResolver } from './cuenta-contable.resolver';
import { CuentaContableFormComponent } from './form/cuenta-contable.component';
import { CuentaContableComponent } from './list/cuenta-contable.component';

const routes: Routes = [
  { path: '', component: CuentaContableComponent },
  { path: 'add', component: CuentaContableFormComponent },
  {
    path: 'edit/:id',
    component: CuentaContableFormComponent,
    resolve: { data: CuentaContableResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, PowerUiModule],
})
export class CuentaContableRoutingModule {}
