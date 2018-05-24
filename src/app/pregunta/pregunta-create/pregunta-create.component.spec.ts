import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaCreateComponent } from './pregunta-create.component';

describe('PreguntaCreateComponent', () => {
  let component: PreguntaCreateComponent;
  let fixture: ComponentFixture<PreguntaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
