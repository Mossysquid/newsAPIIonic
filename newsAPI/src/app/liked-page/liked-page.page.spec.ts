import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikedPagePage } from './liked-page.page';

describe('LikedPagePage', () => {
  let component: LikedPagePage;
  let fixture: ComponentFixture<LikedPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
