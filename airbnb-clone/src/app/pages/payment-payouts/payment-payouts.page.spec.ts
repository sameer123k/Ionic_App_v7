import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentPayoutsPage } from './payment-payouts.page';

describe('PaymentPayoutsPage', () => {
  let component: PaymentPayoutsPage;
  let fixture: ComponentFixture<PaymentPayoutsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentPayoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
