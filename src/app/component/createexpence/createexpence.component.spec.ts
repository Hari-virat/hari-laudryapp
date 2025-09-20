import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateexpenceComponent } from './createexpence.component';

describe('CreateexpenceComponent', () => {
  let component: CreateexpenceComponent;
  let fixture: ComponentFixture<CreateexpenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateexpenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateexpenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
