import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaContableRoutingModule } from './entrada-contable-routing.module';
import { EntradaContableComponent } from './list/entrada-contable.component';

@NgModule({
  declarations: [EntradaContableComponent],
  imports: [CommonModule, EntradaContableRoutingModule],
})
export class EntradaContableModule {}
