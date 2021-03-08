import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta-contable',
  templateUrl: './cuenta-contable.component.html',
})
export class CuentaContableComponent implements OnInit {
  cuentasContables: any[];
  isLoading = false;
  constructor() {}

  ngOnInit(): void {}
}
