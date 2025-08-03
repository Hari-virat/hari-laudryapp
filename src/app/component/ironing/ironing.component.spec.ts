import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IroningComponent } from './ironing.component';

describe('IroningComponent', () => {
  let component: IroningComponent;
  let fixture: ComponentFixture<IroningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IroningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IroningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
