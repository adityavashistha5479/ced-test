import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthCalenderComponent } from './wealth-calender.component';

describe('WealthCalenderComponent', () => {
  let component: WealthCalenderComponent;
  let fixture: ComponentFixture<WealthCalenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WealthCalenderComponent]
    });
    fixture = TestBed.createComponent(WealthCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
