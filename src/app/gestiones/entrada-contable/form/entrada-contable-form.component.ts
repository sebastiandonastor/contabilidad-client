import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuxiliarService, IAuxiliar } from '../../auxiliar/auxiliar.service';
import {
  EntradaContableService,
  IEntradaContable,
} from '../entrada-contable.service';

@Component({
  selector: 'app-entrada-contable-form',
  templateUrl: './entrada-contable-form.component.html',
})
export class EntradaContableFormComponent implements OnInit {
  title = 'Nueva Entrada Contable';
  dateFormat = 'yyyy/MM/dd';
  entradaContableForm: FormGroup;
  isEdit = false;
  id = 0;
  auxiliares$: Observable<IAuxiliar[]>;
  constructor(
    private fb: FormBuilder,
    private entradaContableService: EntradaContableService,
    private auxiliarService: AuxiliarService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.entradaContableForm = this.fb.group({
      description: [null, [Validators.required]],
      entryDate: [null, Validators.required],
      seatAmount: [null, [Validators.required]],
      idAuxiliarSystem: [null, Validators.required],
      account: [null, Validators.required],
      movementType: [null, Validators.required],
      status: [true],
    });

    this.auxiliares$ = this.auxiliarService.get();
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(({ data }) => {
      if (data) {
        this.isEdit = true;
        this.id = data.id;
        this.entradaContableForm.patchValue(data);
      }
    });
  }

  onSave() {
    if (this.entradaContableForm.invalid) {
      for (const key in this.entradaContableForm.controls) {
        this.entradaContableForm.controls[key].markAsDirty();
        this.entradaContableForm.controls[key].updateValueAndValidity();
      }
    } else {
      const auxiliar = this.entradaContableForm.value as IEntradaContable;
      let auxiliarResult$: Observable<IEntradaContable>;
      if (this.isEdit) {
        auxiliarResult$ = this.entradaContableService.update(this.id, auxiliar);
        auxiliar.id = this.id;
      } else {
        auxiliarResult$ = this.entradaContableService.post(auxiliar);
      }
      auxiliarResult$.pipe(take(1)).subscribe((result) => {
        this.message.success(
          `Entrada Contable ${result.description} ${
            this.isEdit ? 'Actualizada' : 'Creada'
          } satisfactoriamente `
        );

        this.id = result.id;
        this.isEdit = true;
      });
    }
  }

  get descriptionControl() {
    return this.entradaContableForm.get('description');
  }
  get transaccionControl() {
    return this.entradaContableForm.get('transactionsEnabled');
  }
}
