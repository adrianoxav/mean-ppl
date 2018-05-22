import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioEditComponent } from './cuestionario-edit.component';

describe('CuestionarioEditComponent', () => {
  let component: CuestionarioEditComponent;
  let fixture: ComponentFixture<CuestionarioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
