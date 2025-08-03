import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyexpensesComponent } from './dailyexpenses.component';

describe('DailyexpensesComponent', () => {
  let component: DailyexpensesComponent;
  let fixture: ComponentFixture<DailyexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyexpensesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
