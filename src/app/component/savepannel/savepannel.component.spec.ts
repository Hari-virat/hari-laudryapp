import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavepannelComponent } from './savepannel.component';

describe('SavepannelComponent', () => {
  let component: SavepannelComponent;
  let fixture: ComponentFixture<SavepannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavepannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavepannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
