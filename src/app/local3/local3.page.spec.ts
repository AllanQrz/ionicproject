import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Local3Page } from './local3.page';

describe('Local3Page', () => {
  let component: Local3Page;
  let fixture: ComponentFixture<Local3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Local3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
