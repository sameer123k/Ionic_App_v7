import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainHome2Page } from './main-home2.page';

describe('MainHome2Page', () => {
  let component: MainHome2Page;
  let fixture: ComponentFixture<MainHome2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainHome2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
