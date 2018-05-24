import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEstudianteDetailComponent } from './evaluacion-estudiante-detail.component';

describe('EvaluacionEstudianteDetailComponent', () => {
  let component: EvaluacionEstudianteDetailComponent;
  let fixture: ComponentFixture<EvaluacionEstudianteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionEstudianteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEstudianteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
