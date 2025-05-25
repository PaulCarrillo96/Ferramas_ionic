import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdproductosPage } from './adproductos.page';

describe('AdproductosPage', () => {
  let component: AdproductosPage;
  let fixture: ComponentFixture<AdproductosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
