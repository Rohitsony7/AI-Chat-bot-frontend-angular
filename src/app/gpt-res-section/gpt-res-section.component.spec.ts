import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GptResSectionComponent } from './gpt-res-section.component';

describe('GptResSectionComponent', () => {
  let component: GptResSectionComponent;
  let fixture: ComponentFixture<GptResSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GptResSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GptResSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
