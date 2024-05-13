import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomTemplateComponent } from './welcom-template.component';

describe('WelcomTemplateComponent', () => {
  let component: WelcomTemplateComponent;
  let fixture: ComponentFixture<WelcomTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
