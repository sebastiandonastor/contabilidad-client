import { Component, OnInit } from '@angular/core';
import { ITipoCuenta, TipoCuentaService } from '../tipo-cuenta.service';
import { take } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-tipo-cuenta',
  templateUrl: './tipo-cuenta.component.html',
})
export class TipoCuentaComponent implements OnInit {
  tiposCuentas: ITipoCuenta[];
  isLoading = false;
  constructor(
    private tipoCuentService: TipoCuentaService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.setTableInfo();
  }

  setTableInfo() {
    this.isLoading = true;
    this.tipoCuentService
      .get()
      .pipe(take(1))
      .subscribe(
        (tiposCuentas) => {
          this.tiposCuentas = tiposCuentas;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.tipoCuentService.delete(id).subscribe((result) => {
      this.tiposCuentas = this.tiposCuentas.filter(
        (tipoCuenta) => tipoCuenta.id !== id
      );
      this.message.success(`Tipo Cuenta borrado satisfactoriamente`);
    });
  }
}
