import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { take } from 'rxjs/operators';
import { EntradaContableService } from '../entrada-contable.service';

@Component({
  selector: 'app-entrada-contable',
  templateUrl: './entrada-contable.component.html',
})
export class EntradaContableComponent implements OnInit {
  entradasContables: any[];
  isLoading = false;
  constructor(
    private service: EntradaContableService,
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
          this.entradasContables = data;
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  confirmDelete(id) {
    this.service.delete(id).subscribe((result) => {
      this.entradasContables = this.entradasContables.filter(
        (data) => data.id !== id
      );
      this.message.success(`Entrada Contable borrado satisfactoriamente`);
    });
  }
}
