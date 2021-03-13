import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  ITipoCuenta,
  TipoCuentaService,
} from '../../tipo-cuenta/tipo-cuenta.service';
import {
  CuentaContableService,
  ICuentaContable,
} from '../cuentas-contable.service';

@Component({
  selector: 'app-cuenta-contable-form',
  templateUrl: './cuenta-contable.component.html',
})
export class CuentaContableFormComponent implements OnInit {
  title = 'Nueva Cuenta Contable';
  cuentaContableForm: FormGroup;
  isEdit = false;
  id = 0;
  tiposCuentas$: Observable<ITipoCuenta[]>;
  constructor(
    private fb: FormBuilder,
    private cuentaContableService: CuentaContableService,
    private tipoCuentaService: TipoCuentaService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cuentaContableForm = this.fb.group({
      description: [null, [Validators.required]],
      transactionsEnabled: [true],
      level: [null, [Validators.required]],
      idAccountType: [null, Validators.required],
      majorAccount: [null, Validators.required],
      balance: [null, Validators.required],
      status: [true],
    });

    this.tiposCuentas$ = this.tipoCuentaService.get();
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(({ data }) => {
      if (data) {
        this.isEdit = true;
        this.id = data.id;
        this.cuentaContableForm.patchValue(data);
      }
    });
  }

  onSave() {
    if (this.cuentaContableForm.invalid) {
      for (const key in this.cuentaContableForm.controls) {
        this.cuentaContableForm.controls[key].markAsDirty();
        this.cuentaContableForm.controls[key].updateValueAndValidity();
      }
    } else {
      const auxiliar = this.cuentaContableForm.value as ICuentaContable;
      let auxiliarResult$: Observable<ICuentaContable>;
      if (this.isEdit) {
        auxiliarResult$ = this.cuentaContableService.update(this.id, auxiliar);
        auxiliar.id = this.id;
      } else {
        auxiliarResult$ = this.cuentaContableService.post(auxiliar);
      }
      auxiliarResult$.pipe(take(1)).subscribe((result) => {
        this.message.success(
          `Cuenta Contable ${result.description} ${
            this.isEdit ? 'Actualizada' : 'Creada'
          } satisfactoriamente `
        );

        this.id = result.id;
        this.isEdit = true;
      });
    }
  }

  get descriptionControl() {
    return this.cuentaContableForm.get('description');
  }
  get transaccionControl() {
    return this.cuentaContableForm.get('transactionsEnabled');
  }
}
