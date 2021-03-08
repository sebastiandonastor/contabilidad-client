import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { CuentaContableComponent } from './list/cuenta-contable.component';

const routes: Routes = [{ path: '', component: CuentaContableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, PowerUiModule],
})
export class CuentaContableRoutingModule {}
