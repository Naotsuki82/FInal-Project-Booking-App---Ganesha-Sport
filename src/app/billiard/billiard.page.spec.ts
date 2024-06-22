import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BilliardPage } from './billiard.page';

describe('BilliardPage', () => {
  let component: BilliardPage;
  let fixture: ComponentFixture<BilliardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BilliardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
