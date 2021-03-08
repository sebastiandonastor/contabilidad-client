import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxiliarResolver } from './auxiliar.resolver';
import { AuxiliarFormComponent } from './form/auxiliar-form.component';
import { AuxiliarComponent } from './list/auxiliar.component';

const routes: Routes = [
  { path: '', component: AuxiliarComponent },
  { path: 'add', component: AuxiliarFormComponent },
  {
    path: 'edit/:id',
    component: AuxiliarFormComponent,
    resolve: { data: AuxiliarResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuxiliarRoutingModule {}
