import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface ITipoMoneda {
  id: number;
  description: string;
  lastExchangeRate: string;
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class TipoMonedaService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<ITipoMoneda[]>(
      `${environment.contabilidadApi}/currencyType`
    );
  }

  getById(id: number) {
    return this.http.get<ITipoMoneda>(
      `${environment.contabilidadApi}/currencyType/${id}`
    );
  }

  post(tipoMoneda: ITipoMoneda) {
    return this.http.post<ITipoMoneda>(
      `${environment.contabilidadApi}/currencyType`,
      tipoMoneda
    );
  }

  update(id: number, tipoMoneda: ITipoMoneda) {
    return this.http.put<ITipoMoneda>(
      `${environment.contabilidadApi}/currencyType/${id}`,
      tipoMoneda
    );
  }

  delete(id: number) {
    return this.http.delete<ITipoMoneda>(
      `${environment.contabilidadApi}/currencyType/${id}`
    );
  }
}
