import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMonedaRoutingModule } from './tipo-moneda-routing.module';
import { TipoMonedaComponent } from './list/tipo-moneda.component';

@NgModule({
  declarations: [TipoMonedaComponent],
  imports: [CommonModule, TipoMonedaRoutingModule],
})
export class TipoMonedaModule {}
