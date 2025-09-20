import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyexpenceComponent } from './monthlyexpence.component';

describe('MonthlyexpenceComponent', () => {
  let component: MonthlyexpenceComponent;
  let fixture: ComponentFixture<MonthlyexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyexpenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
