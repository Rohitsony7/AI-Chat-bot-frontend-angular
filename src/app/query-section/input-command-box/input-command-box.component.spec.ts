import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCommandBoxComponent } from './input-command-box.component';

describe('InputCommandBoxComponent', () => {
  let component: InputCommandBoxComponent;
  let fixture: ComponentFixture<InputCommandBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCommandBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCommandBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
