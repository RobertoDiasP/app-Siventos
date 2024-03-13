import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluxocaixaPage } from './fluxocaixa.page';

describe('FluxocaixaPage', () => {
  let component: FluxocaixaPage;
  let fixture: ComponentFixture<FluxocaixaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FluxocaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
