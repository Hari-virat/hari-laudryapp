import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerhistoryComponent } from './customerhistory.component';

describe('CustomerhistoryComponent', () => {
  let component: CustomerhistoryComponent;
  let fixture: ComponentFixture<CustomerhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
