import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ITipoCuenta, TipoCuentaService } from './tipo-cuenta.service';

@Injectable({
  providedIn: 'root',
})
export class TipoCuentaResolver implements Resolve<ITipoCuenta> {
  constructor(private tipoCuentaService: TipoCuentaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ITipoCuenta | Observable<ITipoCuenta> | Promise<ITipoCuenta> {
    const id = +route.paramMap.get('id');
    return this.tipoCuentaService.getById(id);
  }
}
