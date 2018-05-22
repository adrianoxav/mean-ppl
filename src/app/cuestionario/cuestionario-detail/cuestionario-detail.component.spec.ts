import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionarioDetailComponent } from './cuestionario-detail.component';

describe('CuestionarioDetailComponent', () => {
  let component: CuestionarioDetailComponent;
  let fixture: ComponentFixture<CuestionarioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionarioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
