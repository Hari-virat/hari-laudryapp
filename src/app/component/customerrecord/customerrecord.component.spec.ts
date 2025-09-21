import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrecordComponent } from './customerrecord.component';

describe('CustomerrecordComponent', () => {
  let component: CustomerrecordComponent;
  let fixture: ComponentFixture<CustomerrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
