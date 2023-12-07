import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToyotaPage } from './toyota.page';

describe('ToyotaPage', () => {
  let component: ToyotaPage;
  let fixture: ComponentFixture<ToyotaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToyotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
