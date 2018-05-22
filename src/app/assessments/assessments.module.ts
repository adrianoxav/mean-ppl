import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentsComponent } from './assessments.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { AssessmentDetailComponent } from './assessment-detail/assessment-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentCreateComponent } from './assessment-create/assessment-create.component';
import { AssessmentEditComponent } from './assessment-edit/assessment-edit.component';

const appRoutes: Routes = [
  {
    path: 'assessments',
    component: AssessmentComponent,
    data: { title: 'Assessments' }
  },
  {
    path: 'assessment-details/:id',
    component: AssessmentDetailComponent,
    data: { title: 'Assessment Details' }
  },
  {
    path: 'assessment-create',
    component: AssessmentCreateComponent,
    data: { title: 'Create Assessment' }
  },
  {
    path: 'assessment-edit/:id',
    component: AssessmentEditComponent,
    data: { title: 'Edit Assessment' }
  },
  { path: '',
    redirectTo: '/assessments',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssessmentsComponent, AssessmentComponent, AssessmentDetailComponent, AssessmentCreateComponent, AssessmentEditComponent]
})
export class AssessmentsModule { }
