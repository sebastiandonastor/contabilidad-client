import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ITipoCuenta, TipoCuentaService } from '../tipo-cuenta.service';

@Component({
  selector: 'app-tipo-cuenta-form',
  templateUrl: './tipo-cuenta-form.component.html',
})
export class TipoCuentaFormComponent implements OnInit {
  title = 'Nuevo Tipo de Cuenta';
  tipoCuentaForm: FormGroup;
  isEdit = false;
  id = 0;
  constructor(
    private fb: FormBuilder,
    private tipoCuentaService: TipoCuentaService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.tipoCuentaForm = this.fb.group({
      description: [null, [Validators.required]],
      origin: [null, [Validators.required]],
      status: [true],
    });
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(({ data }) => {
      if (data) {
        this.isEdit = true;
        this.id = data.id;
        this.tipoCuentaForm.patchValue(data);
      }
    });
  }

  onSave() {
    if (this.tipoCuentaForm.invalid) {
      for (const key in this.tipoCuentaForm.controls) {
        this.tipoCuentaForm.controls[key].markAsDirty();
        this.tipoCuentaForm.controls[key].updateValueAndValidity();
      }
    } else {
      const tipoCuenta = this.tipoCuentaForm.value as ITipoCuenta;
      let tipoCuentaResult$: Observable<ITipoCuenta>;
      if (this.isEdit) {
        tipoCuentaResult$ = this.tipoCuentaService.update(this.id, tipoCuenta);
        tipoCuenta.id = this.id;
      } else {
        tipoCuentaResult$ = this.tipoCuentaService.post(tipoCuenta);
      }
      tipoCuentaResult$.pipe(take(1)).subscribe((result) => {
        console.log(result);
        this.message.success(
          `Tipo Cuenta ${result.description} ${
            this.isEdit ? 'Actualizada' : 'Creada'
          } satisfactoriamente `
        );

        this.id = result.id;
        this.isEdit = true;
      });
    }
  }

  get descriptionControl() {
    return this.tipoCuentaForm.get('description');
  }
}
