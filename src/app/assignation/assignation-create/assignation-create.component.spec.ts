import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationCreateComponent } from './assignation-create.component';

describe('AssignationCreateComponent', () => {
  let component: AssignationCreateComponent;
  let fixture: ComponentFixture<AssignationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
