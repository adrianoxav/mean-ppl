import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEstudianteCreateComponent } from './evaluacion-estudiante-create.component';

describe('EvaluacionEstudianteCreateComponent', () => {
  let component: EvaluacionEstudianteCreateComponent;
  let fixture: ComponentFixture<EvaluacionEstudianteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionEstudianteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEstudianteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
