import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaContableRoutingModule } from './cuenta-contable-routing.module';
import { CuentaContableComponent } from './list/cuenta-contable.component';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CuentaContableComponent],
  imports: [
    CommonModule,
    CuentaContableRoutingModule,
    ReactiveFormsModule,
    PowerUiModule,
  ],
})
export class CuentaContableModule {}
