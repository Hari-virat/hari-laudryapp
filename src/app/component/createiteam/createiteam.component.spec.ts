import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateiteamComponent } from './createiteam.component';

describe('CreateiteamComponent', () => {
  let component: CreateiteamComponent;
  let fixture: ComponentFixture<CreateiteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateiteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateiteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
