import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAssessmentCreateComponent } from './pregunta-assessment-create.component';

describe('PreguntaAssessmentCreateComponent', () => {
  let component: PreguntaAssessmentCreateComponent;
  let fixture: ComponentFixture<PreguntaAssessmentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAssessmentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAssessmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
