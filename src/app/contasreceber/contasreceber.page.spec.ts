import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContasreceberPage } from './contasreceber.page';

describe('ContasreceberPage', () => {
  let component: ContasreceberPage;
  let fixture: ComponentFixture<ContasreceberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContasreceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
