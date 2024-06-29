import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentsFamilyComponent } from './investments-family.component';

describe('InvestmentsFamilyComponent', () => {
  let component: InvestmentsFamilyComponent;
  let fixture: ComponentFixture<InvestmentsFamilyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentsFamilyComponent]
    });
    fixture = TestBed.createComponent(InvestmentsFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
