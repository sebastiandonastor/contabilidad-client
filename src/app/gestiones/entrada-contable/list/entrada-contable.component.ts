import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-contable',
  templateUrl: './entrada-contable.component.html',
})
export class EntradaContableComponent implements OnInit {
  entradasContables: any[];
  isLoading = false;
  constructor() {}

  ngOnInit(): void {}
}
