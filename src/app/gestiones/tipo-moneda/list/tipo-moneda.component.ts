import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { take } from 'rxjs/operators';
import { ITipoMoneda, TipoMonedaService } from '../tipo-moneda.service';

@Component({
  selector: 'app-tipo-moneda',
  templateUrl: './tipo-moneda.component.html',
})
export class TipoMonedaComponent implements OnInit {
  tiposMonedas: ITipoMoneda[];
  isLoading = false;
  constructor(
    private tipoMonedaService: TipoMonedaService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.setTableInfo();
  }

  setTableInfo() {
    this.isLoading = true;
    this.tipoMonedaService
      .get()
      .pipe(take(1))
      .subscribe(
        (tiposCuentas) => {
          this.tiposMonedas = tiposCuentas;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.tipoMonedaService.delete(id).subscribe((result) => {
      this.tiposMonedas = this.tiposMonedas.filter(
        (tipoCuenta) => tipoCuenta.id !== id
      );
      this.message.success(`Tipo Moneda borrado satisfactoriamente`);
    });
  }
}
