import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { take } from 'rxjs/operators';
import { AuxiliarService } from '../auxiliar.service';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
})
export class AuxiliarComponent implements OnInit {
  auxiliares: any[];
  isLoading = false;
  constructor(
    private auxiliarService: AuxiliarService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.setTableInfo();
  }

  setTableInfo() {
    this.isLoading = true;
    this.auxiliarService
      .get()
      .pipe(take(1))
      .subscribe(
        (auxiliar) => {
          this.auxiliares = auxiliar;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.auxiliarService.delete(id).subscribe((result) => {
      this.auxiliares = this.auxiliares.filter(
        (tipoCuenta) => tipoCuenta.id !== id
      );
      this.message.success(`Auxiliar borrado satisfactoriamente`);
    });
  }
}
