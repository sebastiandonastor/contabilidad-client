import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCuentaFormComponent } from './tipo-cuenta-form.component';

describe('TipoCuentaFormComponent', () => {
  let component: TipoCuentaFormComponent;
  let fixture: ComponentFixture<TipoCuentaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCuentaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoCuentaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
