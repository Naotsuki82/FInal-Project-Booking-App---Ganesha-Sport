import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutsalPage } from './futsal.page';

describe('FutsalPage', () => {
  let component: FutsalPage;
  let fixture: ComponentFixture<FutsalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FutsalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
