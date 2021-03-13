import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradaContableRoutingModule } from './entrada-contable-routing.module';
import { EntradaContableComponent } from './list/entrada-contable.component';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { EntradaContableFormComponent } from './form/entrada-contable-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  declarations: [EntradaContableComponent, EntradaContableFormComponent],
  imports: [
    CommonModule,
    EntradaContableRoutingModule,
    PowerUiModule,
    ReactiveFormsModule,
    NzDatePickerModule,
  ],
})
export class EntradaContableModule {}
