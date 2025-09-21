import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryrecordComponent } from './deliveryrecord.component';

describe('DeliveryrecordComponent', () => {
  let component: DeliveryrecordComponent;
  let fixture: ComponentFixture<DeliveryrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
