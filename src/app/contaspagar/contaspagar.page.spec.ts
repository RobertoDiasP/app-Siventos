import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContaspagarPage } from './contaspagar.page';

describe('ContaspagarPage', () => {
  let component: ContaspagarPage;
  let fixture: ComponentFixture<ContaspagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContaspagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
