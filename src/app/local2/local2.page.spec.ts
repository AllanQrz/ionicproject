import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Local2Page } from './local2.page';

describe('Local2Page', () => {
  let component: Local2Page;
  let fixture: ComponentFixture<Local2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Local2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
