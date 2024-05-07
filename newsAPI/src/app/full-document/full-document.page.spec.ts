import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullDocumentPage } from './full-document.page';

describe('FullDocumentPage', () => {
  let component: FullDocumentPage;
  let fixture: ComponentFixture<FullDocumentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FullDocumentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
