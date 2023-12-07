import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MitsubishiPage } from './mitsubishi.page';

describe('MitsubishiPage', () => {
  let component: MitsubishiPage;
  let fixture: ComponentFixture<MitsubishiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MitsubishiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
