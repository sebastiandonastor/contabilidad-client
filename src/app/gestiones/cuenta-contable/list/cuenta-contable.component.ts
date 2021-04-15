import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { take } from 'rxjs/operators';
import { CuentaContableService } from '../cuentas-contable.service';

@Component({
  selector: 'app-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
})
export class CuentaContableComponent implements OnInit {
  cuentasContablesState: any[] = [];
  dataCuentas: any[] = [];
  isLoading = false;
  constructor(
    private service: CuentaContableService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.setTableInfo();
  }

  setTableInfo() {
    this.isLoading = true;
    this.service
      .get()
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.cuentasContablesState = data;
          this.dataCuentas = this.cuentasContablesState.slice(0, 7);

          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.service.delete(id).subscribe((result) => {
      this.cuentasContablesState = this.cuentasContablesState.filter(
        (data) => data.id !== id
      );

      this.message.success(`Cuenta Contable borrado satisfactoriamente`);
    });
  }
  onPageIndexChange(number) {
    const currentPosition = (number - 1) * 7;
    this.dataCuentas = this.cuentasContablesState.slice(
      currentPosition,
      currentPosition + 7
    );
  }
}
