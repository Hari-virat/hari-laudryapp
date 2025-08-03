import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryhistoryComponent } from './deliveryhistory.component';

describe('DeliveryhistoryComponent', () => {
  let component: DeliveryhistoryComponent;
  let fixture: ComponentFixture<DeliveryhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeliveryhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
