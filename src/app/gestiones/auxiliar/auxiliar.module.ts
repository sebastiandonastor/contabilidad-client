import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliarRoutingModule } from './auxiliar-routing.module';
import { AuxiliarComponent } from './list/auxiliar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PowerUiModule } from 'src/app/power-ui/power-ui.module';
import { AuxiliarFormComponent } from './form/auxiliar-form.component';

@NgModule({
  declarations: [AuxiliarComponent, AuxiliarFormComponent],
  imports: [
    CommonModule,
    AuxiliarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PowerUiModule,
  ],
})
export class AuxiliarModule {}
