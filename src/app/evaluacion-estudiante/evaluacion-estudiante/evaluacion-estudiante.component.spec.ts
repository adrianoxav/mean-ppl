import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEstudianteComponent } from './evaluacion-estudiante.component';

describe('EvaluacionEstudianteComponent', () => {
  let component: EvaluacionEstudianteComponent;
  let fixture: ComponentFixture<EvaluacionEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
