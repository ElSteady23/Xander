import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFundPage } from './not-fund.page';

describe('NotFundPage', () => {
  let component: NotFundPage;
  let fixture: ComponentFixture<NotFundPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotFundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
