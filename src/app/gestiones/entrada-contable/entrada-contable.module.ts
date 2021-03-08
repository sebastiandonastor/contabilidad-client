import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaContableRoutingModule } from './entrada-contable-routing.module';
import { EntradaContableComponent } from './list/entrada-contable.component';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';

@NgModule({
  declarations: [EntradaContableComponent],
  imports: [CommonModule, EntradaContableRoutingModule, PowerUiModule],
})
export class EntradaContableModule {}
