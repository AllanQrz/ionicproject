import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendarbarbPage } from './agendarbarb.page';

describe('AgendarbarbPage', () => {
  let component: AgendarbarbPage;
  let fixture: ComponentFixture<AgendarbarbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgendarbarbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
