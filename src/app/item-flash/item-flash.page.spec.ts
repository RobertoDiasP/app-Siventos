import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemFlashPage } from './item-flash.page';

describe('ItemFlashPage', () => {
  let component: ItemFlashPage;
  let fixture: ComponentFixture<ItemFlashPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ItemFlashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
