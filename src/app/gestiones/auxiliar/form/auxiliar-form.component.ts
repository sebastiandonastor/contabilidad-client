import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuxiliarService, IAuxiliar } from '../auxiliar.service';

@Component({
  selector: 'app-auxiliar-form',
  templateUrl: './auxiliar-form.component.html',
})
export class AuxiliarFormComponent implements OnInit {
  title = 'Nuevo Auxiliar';
  auxiliarForm: FormGroup;
  isEdit = false;
  id = 0;
  constructor(
    private fb: FormBuilder,
    private auxiliarService: AuxiliarService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.auxiliarForm = this.fb.group({
      name: [null, [Validators.required]],
      status: [true],
    });
  }

  ngOnInit(): void {
    this.route.data.pipe(take(1)).subscribe(({ data }) => {
      if (data) {
        this.isEdit = true;
        this.id = data.id;
        this.auxiliarForm.patchValue(data);
      }
    });
  }

  onSave() {
    if (this.auxiliarForm.invalid) {
      for (const key in this.auxiliarForm.controls) {
        this.auxiliarForm.controls[key].markAsDirty();
        this.auxiliarForm.controls[key].updateValueAndValidity();
      }
    } else {
      const auxiliar = this.auxiliarForm.value as IAuxiliar;
      let auxiliarResult$: Observable<IAuxiliar>;
      if (this.isEdit) {
        auxiliarResult$ = this.auxiliarService.update(this.id, auxiliar);
        auxiliar.id = this.id;
      } else {
        auxiliarResult$ = this.auxiliarService.post(auxiliar);
      }
      auxiliarResult$.pipe(take(1)).subscribe((result) => {
        console.log(result);
        this.message.success(
          `Tipo Cuenta ${result.name} ${
            this.isEdit ? 'Actualizada' : 'Creada'
          } satisfactoriamente `
        );

        this.id = result.id;
        this.isEdit = true;
      });
    }
  }

  get nameControl() {
    return this.auxiliarForm.get('name');
  }
}
