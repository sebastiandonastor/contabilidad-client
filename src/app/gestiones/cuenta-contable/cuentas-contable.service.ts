import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ICuentaContable {
  id: number;
  description: string;
  transactionsEnabled: boolean;
  level: number;
  majorAccount: string;
  balance: number;
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class CuentaContableService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<ICuentaContable[]>(
      `${environment.contabilidadApi}/accountingAccount`
    );
  }

  getById(id: number) {
    return this.http.get<ICuentaContable>(
      `${environment.contabilidadApi}/accountingAccount/${id}`
    );
  }

  post(auxiliar: ICuentaContable) {
    return this.http.post<ICuentaContable>(
      `${environment.contabilidadApi}/accountingAccount`,
      auxiliar
    );
  }

  update(id: number, cuentaContable: ICuentaContable) {
    return this.http.put<ICuentaContable>(
      `${environment.contabilidadApi}/accountingAccount/${id}`,
      cuentaContable
    );
  }

  delete(id: number) {
    return this.http.delete<ICuentaContable>(
      `${environment.contabilidadApi}/accountingAccount/${id}`
    );
  }
}
