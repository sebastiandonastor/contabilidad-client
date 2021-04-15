import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CuentaContableService,
  ICuentaContable,
} from '../../cuenta-contable/cuentas-contable.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styles: [
    `
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `,
  ],
})
export class CuentasComponent implements OnInit {
  i = 0;
  editId: string | null = null;
  @Input() listOfData: any[];
  @Output() deleteRowCuenta = new EventEmitter<any[]>();
  cuentaContables$: Observable<ICuentaContable[]>;

  constructor(private cuentaContableService: CuentaContableService) {}
  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }
  updateAmount(amount, data, type) {
    if (type === 1) {
      data.creditAmount = data.debitAmount;
    } else {
      data.debitAmount = data.creditAmount;
    }

    if (
      (!data.creditAmount && !data.debitAmount) ||
      (data.creditAmount === 0 && data.debitAmount === 0)
    ) {
      data.lastEdit = 0;
    } else {
      data.lastEdit = type;
    }
  }

  addRow(): void {
    this.listOfData.push({
      index: this.i,
      idAccountingAccount: 0,
      creditAmount: 0.0,
      debitAmount: 0.0,
      lastEdit: 0,
    });
    this.i++;
  }
  setLastEdit(data, type) {
    data.lastEdit = type;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d) => d.index !== id);
    this.deleteRowCuenta.next(this.listOfData);
  }

  ngOnInit(): void {
    this.cuentaContables$ = this.cuentaContableService.get();
  }
}
