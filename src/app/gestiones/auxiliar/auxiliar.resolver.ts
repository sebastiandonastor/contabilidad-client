import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IAuxiliar, AuxiliarService } from './auxiliar.service';

@Injectable({
  providedIn: 'root',
})
export class AuxiliarResolver implements Resolve<IAuxiliar> {
  constructor(private auxiliarService: AuxiliarService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IAuxiliar | Observable<IAuxiliar> | Promise<IAuxiliar> {
    const id = +route.paramMap.get('id');
    return this.auxiliarService.getById(id);
  }
}
