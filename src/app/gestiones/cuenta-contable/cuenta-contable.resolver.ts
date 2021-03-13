import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  CuentaContableService,
  ICuentaContable,
} from './cuentas-contable.service';

@Injectable({
  providedIn: 'root',
})
export class CuentaContableResolver implements Resolve<ICuentaContable> {
  constructor(private service: CuentaContableService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): ICuentaContable | Observable<ICuentaContable> | Promise<ICuentaContable> {
    const id = +route.paramMap.get('id');
    return this.service.getById(id);
  }
}
