import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlashcardsPage } from './flashcards.page';

describe('FlashcardsPage', () => {
  let component: FlashcardsPage;
  let fixture: ComponentFixture<FlashcardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FlashcardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
