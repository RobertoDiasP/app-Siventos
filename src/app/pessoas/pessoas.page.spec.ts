import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PessoasPage } from './pessoas.page';

describe('PessoasPage', () => {
  let component: PessoasPage;
  let fixture: ComponentFixture<PessoasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PessoasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
