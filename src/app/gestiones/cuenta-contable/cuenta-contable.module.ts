import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaContableRoutingModule } from './cuenta-contable-routing.module';
import { CuentaContableComponent } from './list/cuenta-contable.component';

@NgModule({
  declarations: [CuentaContableComponent],
  imports: [CommonModule, CuentaContableRoutingModule],
})
export class CuentaContableModule {}
