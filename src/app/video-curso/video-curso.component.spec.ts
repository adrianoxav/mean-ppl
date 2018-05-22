import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCursoComponent } from './video-curso.component';

describe('VideoCursoComponent', () => {
  let component: VideoCursoComponent;
  let fixture: ComponentFixture<VideoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
