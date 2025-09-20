import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyexpenceComponent } from './dailyexpence.component';

describe('DailyexpenceComponent', () => {
  let component: DailyexpenceComponent;
  let fixture: ComponentFixture<DailyexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailyexpenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
