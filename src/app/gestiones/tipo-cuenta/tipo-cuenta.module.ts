import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoCuentaRoutingModule } from './tipo-cuenta-routing.module';
import { TipoCuentaComponent } from './list/tipo-cuenta.component';
import { TipoCuentaFormComponent } from './form/tipo-cuenta-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';

@NgModule({
  declarations: [TipoCuentaComponent, TipoCuentaFormComponent],
  imports: [
    CommonModule,
    TipoCuentaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PowerUiModule,
  ],
})
export class TipoCuentaModule {}
