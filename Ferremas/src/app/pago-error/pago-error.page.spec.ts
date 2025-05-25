import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoErrorPage } from './pago-error.page';

describe('PagoErrorPage', () => {
  let component: PagoErrorPage;
  let fixture: ComponentFixture<PagoErrorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
