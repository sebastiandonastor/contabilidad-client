import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ITipoCuenta {
  id: number;
  description: string;
  origin: string;
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class TipoCuentaService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<ITipoCuenta[]>(
      `${environment.contabilidadApi}/accountType`
    );
  }

  getById(id: number) {
    return this.http.get<ITipoCuenta>(
      `${environment.contabilidadApi}/accountType/${id}`
    );
  }

  post(tipoCuenta: ITipoCuenta) {
    return this.http.post<ITipoCuenta>(
      `${environment.contabilidadApi}/accountType`,
      tipoCuenta
    );
  }

  update(id: number, tipoCuenta: ITipoCuenta) {
    return this.http.put<ITipoCuenta>(
      `${environment.contabilidadApi}/accountType/${id}`,
      tipoCuenta
    );
  }

  delete(id: number) {
    return this.http.delete<ITipoCuenta>(
      `${environment.contabilidadApi}/accountType/${id}`
    );
  }
}
