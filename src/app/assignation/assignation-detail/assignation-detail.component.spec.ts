import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignationDetailComponent } from './assignation-detail.component';

describe('AssignationDetailComponent', () => {
  let component: AssignationDetailComponent;
  let fixture: ComponentFixture<AssignationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
