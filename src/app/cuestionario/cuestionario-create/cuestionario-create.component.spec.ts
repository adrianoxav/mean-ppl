import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioCreateComponent } from './cuestionario-create.component';

describe('CuestionarioCreateComponent', () => {
  let component: CuestionarioCreateComponent;
  let fixture: ComponentFixture<CuestionarioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
