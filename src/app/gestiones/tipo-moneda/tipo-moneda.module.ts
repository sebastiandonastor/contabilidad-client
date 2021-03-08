import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoMonedaRoutingModule } from './tipo-moneda-routing.module';
import { TipoMonedaComponent } from './list/tipo-moneda.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { TipoMonedaFormComponent } from './form/tipo-moneda-form.component';

@NgModule({
  declarations: [TipoMonedaComponent, TipoMonedaFormComponent],
  imports: [
    CommonModule,
    TipoMonedaRoutingModule,
    ReactiveFormsModule,
    PowerUiModule,
  ],
})
export class TipoMonedaModule {}
