import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NissanPage } from './nissan.page';

describe('NissanPage', () => {
  let component: NissanPage;
  let fixture: ComponentFixture<NissanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NissanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
