import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolkswagenPage } from './volkswagen.page';

describe('VolkswagenPage', () => {
  let component: VolkswagenPage;
  let fixture: ComponentFixture<VolkswagenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolkswagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
