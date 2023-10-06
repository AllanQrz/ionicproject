import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertCadPage } from './alert-cad.page';

describe('AlertCadPage', () => {
  let component: AlertCadPage;
  let fixture: ComponentFixture<AlertCadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlertCadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
