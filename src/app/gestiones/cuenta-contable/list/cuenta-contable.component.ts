import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { take } from 'rxjs/operators';
import { CuentaContableService } from '../cuentas-contable.service';

@Component({
  selector: 'app-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
})
export class CuentaContableComponent implements OnInit {
  cuentasContables: any[];
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
          this.cuentasContables = data;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.service.delete(id).subscribe((result) => {
      this.cuentasContables = this.cuentasContables.filter(
        (data) => data.id !== id
      );
      this.message.success(`Cuenta Contable borrado satisfactoriamente`);
    });
  }
}
