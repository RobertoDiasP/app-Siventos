import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaPaginaPage } from './nova-pagina.page';

describe('NovaPaginaPage', () => {
  let component: NovaPaginaPage;
  let fixture: ComponentFixture<NovaPaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
