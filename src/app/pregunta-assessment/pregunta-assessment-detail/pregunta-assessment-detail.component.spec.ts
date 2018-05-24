import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaAssessmentDetailComponent } from './pregunta-assessment-detail.component';

describe('PreguntaAssessmentDetailComponent', () => {
  let component: PreguntaAssessmentDetailComponent;
  let fixture: ComponentFixture<PreguntaAssessmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaAssessmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaAssessmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
