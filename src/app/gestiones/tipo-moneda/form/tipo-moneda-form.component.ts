import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ITipoMoneda, TipoMonedaService } from '../tipo-moneda.service';

@Component({
  selector: 'app-tipo-moneda-form',
  templateUrl: './tipo-moneda-form.component.html',
})
export class TipoMonedaFormComponent implements OnInit {
  title = 'Nuevo Tipo de Moneda';
  tipoMonedaForm: FormGroup;
  isEdit = false;
  id = 0;
  constructor(
    private fb: FormBuilder,
    private tipoMonedaService: TipoMonedaService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tipoMonedaForm = this.fb.group({
      description: [null, [Validators.required]],
      sync: [null],
      lastExchangeRate: [null, [Validators.required]],
      status: [true],
    });
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(({ data }) => {
      if (data) {
        this.isEdit = true;
        this.id = data.id;
        this.tipoMonedaForm.patchValue(data);
      }
    });
  }

  onSync() {
    this.tipoMonedaService
      .getMoneda(this.tipoMonedaForm.get('sync').value)
      .subscribe(({ currencyRateVal }) => {
        this.tipoMonedaForm.get('lastExchangeRate').setValue(currencyRateVal);
      });
  }

  onSave() {
    if (this.tipoMonedaForm.invalid) {
      for (const key in this.tipoMonedaForm.controls) {
        this.tipoMonedaForm.controls[key].markAsDirty();
        this.tipoMonedaForm.controls[key].updateValueAndValidity();
      }
    } else {
      const tipoCuenta = this.tipoMonedaForm.value as ITipoMoneda;
      let tipoCuentaResult$: Observable<ITipoMoneda>;
      if (this.isEdit) {
        tipoCuentaResult$ = this.tipoMonedaService.update(this.id, tipoCuenta);
        tipoCuenta.id = this.id;
      } else {
        tipoCuentaResult$ = this.tipoMonedaService.post(tipoCuenta);
      }
      tipoCuentaResult$.pipe(take(1)).subscribe((result) => {
        console.log(result);
        this.message.success(
          `Tipo Moneda ${result.description} ${
            this.isEdit ? 'Actualizada' : 'Creada'
          } satisfactoriamente `
        );

        this.id = result.id;
        this.isEdit = true;
      });
    }
  }

  get descriptionControl() {
    return this.tipoMonedaForm.get('description');
  }
}
