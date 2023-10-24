import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NvcPage } from './nvc.page';

describe('NvcPage', () => {
  let component: NvcPage;
  let fixture: ComponentFixture<NvcPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NvcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
