import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaAssessmentComponent } from './pregunta-assessment/pregunta-assessment.component';
import { PreguntaAssessmentCreateComponent } from './pregunta-assessment-create/pregunta-assessment-create.component';
import { PreguntaAssessmentEditComponent } from './pregunta-assessment-edit/pregunta-assessment-edit.component';
import { PreguntaAssessmentDetailComponent } from './pregunta-assessment-detail/pregunta-assessment-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'pregunta_assessments',
    component: PreguntaAssessmentComponent,
    data: { title: 'pregunta_assessments' }
  },
  {
    path: 'pregunta_assessment-details/:id',
    component: PreguntaAssessmentDetailComponent,
    data: { title: 'pregunta_assessment Details' }
  },
  {
    path: 'pregunta_assessment-create',
    component: PreguntaAssessmentCreateComponent,
    data: { title: 'Create pregunta_assessment' }
  },
  {
    path: 'pregunta_assessment-edit/:id',
    component: PreguntaAssessmentEditComponent,
    data: { title: 'Edit pregunta_assessment' }
  },
  { path: '',
    redirectTo: '/preguntas',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreguntaAssessmentComponent, PreguntaAssessmentCreateComponent, PreguntaAssessmentEditComponent, PreguntaAssessmentDetailComponent]
})
export class PreguntaAssessmentModule { }
