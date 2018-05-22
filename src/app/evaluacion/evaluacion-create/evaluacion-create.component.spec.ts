import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluacionCreateComponent } from './evaluacion-create.component';

describe('EvaluacionCreateComponent', () => {
  let component: EvaluacionCreateComponent;
  let fixture: ComponentFixture<EvaluacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
