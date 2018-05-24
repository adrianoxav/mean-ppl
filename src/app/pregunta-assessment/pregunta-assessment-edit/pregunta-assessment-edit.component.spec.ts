import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAssessmentEditComponent } from './pregunta-assessment-edit.component';

describe('PreguntaAssessmentEditComponent', () => {
  let component: PreguntaAssessmentEditComponent;
  let fixture: ComponentFixture<PreguntaAssessmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAssessmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAssessmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
