import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionEstudianteEditComponent } from './evaluacion-estudiante-edit.component';

describe('EvaluacionEstudianteEditComponent', () => {
  let component: EvaluacionEstudianteEditComponent;
  let fixture: ComponentFixture<EvaluacionEstudianteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionEstudianteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionEstudianteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
