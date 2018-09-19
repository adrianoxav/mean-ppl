import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRealizarComponent } from './inicio-realizar.component';

describe('InicioRealizarComponent', () => {
  let component: InicioRealizarComponent;
  let fixture: ComponentFixture<InicioRealizarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRealizarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRealizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
