import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
  EntradaContableService,
  IEntradaContable,
} from './entrada-contable.service';

@Injectable({
  providedIn: 'root',
})
export class EntradaContableResolver implements Resolve<IEntradaContable> {
  constructor(private service: EntradaContableService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | IEntradaContable
    | Observable<IEntradaContable>
    | Promise<IEntradaContable> {
    const id = +route.paramMap.get('id');
    return this.service.getById(id);
  }
}
