import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliarComponent } from './list/auxiliar.component';

const routes: Routes = [{ path: '', component: AuxiliarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliarRoutingModule {}
