import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContinueEmailPage } from './continue-email.page';

describe('ContinueEmailPage', () => {
  let component: ContinueEmailPage;
  let fixture: ComponentFixture<ContinueEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContinueEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
