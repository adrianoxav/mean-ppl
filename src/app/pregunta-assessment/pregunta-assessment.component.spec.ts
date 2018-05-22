import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAssessmentComponent } from './pregunta-assessment.component';

describe('PreguntaAssessmentComponent', () => {
  let component: PreguntaAssessmentComponent;
  let fixture: ComponentFixture<PreguntaAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
