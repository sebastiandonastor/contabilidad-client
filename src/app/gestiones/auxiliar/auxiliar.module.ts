import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuxiliarRoutingModule } from './auxiliar-routing.module';
import { AuxiliarComponent } from './list/auxiliar.component';

@NgModule({
  declarations: [AuxiliarComponent],
  imports: [CommonModule, AuxiliarRoutingModule],
})
export class AuxiliarModule {}
