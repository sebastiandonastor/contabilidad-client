import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IAuxiliar {
  id: number;
  name: string;
  status: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuxiliarService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<IAuxiliar[]>(
      `${environment.contabilidadApi}/auxiliarSystem`
    );
  }

  getById(id: number) {
    return this.http.get<IAuxiliar>(
      `${environment.contabilidadApi}/auxiliarSystem/${id}`
    );
  }

  post(auxiliar: IAuxiliar) {
    return this.http.post<IAuxiliar>(
      `${environment.contabilidadApi}/auxiliarSystem`,
      auxiliar
    );
  }

  update(id: number, auxiliar: IAuxiliar) {
    return this.http.put<IAuxiliar>(
      `${environment.contabilidadApi}/auxiliarSystem/${id}`,
      auxiliar
    );
  }

  delete(id: number) {
    return this.http.delete<IAuxiliar>(
      `${environment.contabilidadApi}/auxiliarSystem/${id}`
    );
  }
}
