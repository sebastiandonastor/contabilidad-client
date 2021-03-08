import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITipoMoneda, TipoMonedaService } from './tipo-moneda.service';

@Injectable({
  providedIn: 'root',
})
export class TipoMonedaResolver implements Resolve<ITipoMoneda> {
  constructor(private tipoMonedaService: TipoMonedaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ITipoMoneda | Observable<ITipoMoneda> | Promise<ITipoMoneda> {
    const id = +route.paramMap.get('id');
    return this.tipoMonedaService.getById(id);
  }
}
