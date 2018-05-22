import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { AssignationComponent } from './assignation/assignation.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { CursoComponent } from './curso/curso.component';
import { EvaluacionEstudianteComponent } from './evaluacion-estudiante/evaluacion-estudiante.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { PersonaComponent } from './persona/persona.component';
import { PreguntaAssessmentComponent } from './pregunta-assessment/pregunta-assessment.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { VideoCursoComponent } from './video-curso/video-curso.component';
import { VideoComponent } from './video/video.component';
import { InicioComponent } from './inicio/inicio.component';
import { AssessmentsComponent } from './assessments/assessments.component';

import { AssessmentsModule } from './assessments/assessments.module';
import { AssessmentCreateComponent } from './assessments/assessment-create/assessment-create.component';
import { AssessmentDetailComponent } from './assessments/assessment-detail/assessment-detail.component';
import { AssessmentEditComponent } from './assessments/assessment-edit/assessment-edit.component';

import { AssignationModule } from './assignation/assignation.module';
import { AssignationCreateComponent } from './assignation/assignation-create/assignation-create.component';
import { AssignationDetailComponent } from './assignation/assignation-detail/assignation-detail.component';
import { AssignationEditComponent } from './assignation/assignation-edit/assignation-edit.component';


import { CuestionarioEditComponent } from './cuestionario/cuestionario-edit/cuestionario-edit.component';
import { CuestionarioCreateComponent } from './cuestionario/cuestionario-create/cuestionario-create.component';
import { CuestionarioDetailComponent } from './cuestionario/cuestionario-detail/cuestionario-detail.component';

import { CursoModule } from './curso/curso.module';
import { CursoEditComponent } from './curso/curso-edit/curso-edit.component';
import { CursoCreateComponent } from './curso/curso-create/curso-create.component';
import { CursoDetailComponent } from './curso/curso-detail/curso-detail.component';

import { EvaluacionModule } from './evaluacion/evaluacion.module';
import { EvaluacionEditComponent } from './evaluacion/evaluacion-edit/evaluacion-edit.component';
import { EvaluacionCreateComponent } from './evaluacion/evaluacion-create/evaluacion-create.component';
import { EvaluacionDetailComponent } from './evaluacion/evaluacion-detail/evaluacion-detail.component';

//import { routing } from './app.routing';


const appRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },

  //assesstments

  {
    path: 'assessments',
    component: AssessmentsComponent,
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
//assignations
  {
    path: 'assignations',
    component: AssignationComponent,
    data: { title: 'assignations' }
  },
  {
    path: 'assignation-details/:id',
    component: AssignationDetailComponent,
    data: { title: 'assignation Details' }
  },
  {
    path: 'assignation-create',
    component: AssignationCreateComponent,
    data: { title: 'Create assignation' }
  },
  {
    path: 'assignation-edit/:id',
    component: AssignationEditComponent,
    data: { title: 'Edit assignation' }
  },

//cuestionarios
{
  path: 'cuestionarios',
  component: CuestionarioComponent,
  data: { title: 'cuestionarios' }
},
{
  path: 'cuestionario-details/:id',
  component: CuestionarioDetailComponent,
  data: { title: 'cuestionario Details' }
},
{
  path: 'cuestionario-create',
  component: CuestionarioCreateComponent,
  data: { title: 'Create cuestionario' }
},
{
  path: 'cuestionario-edit/:id',
  component: CuestionarioEditComponent,
  data: { title: 'Edit cuestionario' }
},
{ path: '',
  redirectTo: '/cuestionarios',
  pathMatch: 'full'
},

//Cursos
{
  path: 'cursos',
  component: CursoComponent,
  data: { title: 'cursos' }
},
{
  path: 'curso-details/:id',
  component: CursoDetailComponent,
  data: { title: 'curso Details' }
},
{
  path: 'curso-create',
  component: CursoCreateComponent,
  data: { title: 'Create curso' }
},
{
  path: 'curso-edit/:id',
  component: CursoEditComponent,
  data: { title: 'Edit curso' }
},
{ path: '',
  redirectTo: '/cursos',
  pathMatch: 'full'
},

//Evaluaciones
{
  path: 'evaluaciones',
  component: EvaluacionComponent,
  data: { title: 'evaluaciones' }
},
{
  path: 'evaluacion-details/:id',
  component: EvaluacionDetailComponent,
  data: { title: 'evaluacion Details' }
},
{
  path: 'evaluacion-create',
  component: EvaluacionCreateComponent,
  data: { title: 'Create evaluacion' }
},
{
  path: 'evaluacion-edit/:id',
  component: EvaluacionEditComponent,
  data: { title: 'Edit evaluacion' }
},
{ path: '',
  redirectTo: '/evaluaciones',
  pathMatch: 'full'
},
  { path: '',
    redirectTo: '/assignations',
    pathMatch: 'full'
  }
/*  {
    path: 'assessments',
    component: AssessmentsComponent,
    data: { title: 'Assessment List' }
  }
/*  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  },*/

];
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    AssignationComponent,
    CuestionarioComponent,
    CursoComponent,
    EvaluacionEstudianteComponent,
    EvaluacionComponent,
    PersonaComponent,
    PreguntaAssessmentComponent,
    PreguntaComponent,
    VideoCursoComponent,
    VideoComponent,
    AssessmentsComponent,
    AssessmentCreateComponent,
    AssessmentEditComponent,
    AssessmentDetailComponent,
    AssignationComponent,
    AssignationCreateComponent,
    AssignationEditComponent,
    AssignationDetailComponent,
    InicioComponent,
    CuestionarioEditComponent,
    CuestionarioCreateComponent,
    CuestionarioDetailComponent,
    CursoEditComponent,
    CursoCreateComponent,
    CursoDetailComponent,
    EvaluacionEditComponent,
    EvaluacionCreateComponent,
    EvaluacionDetailComponent,

      ],
  imports: [
    BrowserModule,

  //  routing,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
