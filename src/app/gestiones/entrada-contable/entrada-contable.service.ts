import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IEntradaContable {
  id: number;
  description: string;
  idAuxiliarSystem: number;
  Account: string;
  movementType: string;
  entryDate: Date;
  seatAmount: number;
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class EntradaContableService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<IEntradaContable[]>(
      `${environment.contabilidadApi}/accountingEntry`
    );
  }

  getById(id: number) {
    return this.http.get<IEntradaContable>(
      `${environment.contabilidadApi}/accountingEntry/${id}`
    );
  }

  post(auxiliar: IEntradaContable) {
    return this.http.post<IEntradaContable>(
      `${environment.contabilidadApi}/accountingEntry`,
      auxiliar
    );
  }

  update(id: number, cuentaContable: IEntradaContable) {
    return this.http.put<IEntradaContable>(
      `${environment.contabilidadApi}/accountingEntry/${id}`,
      cuentaContable
    );
  }

  delete(id: number) {
    return this.http.delete<IEntradaContable>(
      `${environment.contabilidadApi}/accountingEntry/${id}`
    );
  }
}
