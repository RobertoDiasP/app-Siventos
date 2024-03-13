import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdvPage } from './pdv.page';

describe('PdvPage', () => {
  let component: PdvPage;
  let fixture: ComponentFixture<PdvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
