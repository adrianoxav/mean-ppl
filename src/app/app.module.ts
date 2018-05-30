import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

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


import { Evaluacion_estudianteModule } from './evaluacion-estudiante/evaluacion-estudiante.module';
import { EvaluacionEstudianteEditComponent } from './evaluacion-estudiante/evaluacion-estudiante-edit/evaluacion-estudiante-edit.component';
import { EvaluacionEstudianteCreateComponent } from './evaluacion-estudiante/evaluacion-estudiante-create/evaluacion-estudiante-create.component';
import { EvaluacionEstudianteDetailComponent } from './evaluacion-estudiante/evaluacion-estudiante-detail/evaluacion-estudiante-detail.component';


import { PersonaModule } from './persona/persona.module';
import { PersonaEditComponent } from './persona/persona-edit/persona-edit.component';
import { PersonaCreateComponent } from './persona/persona-create/persona-create.component';
import { PersonaDetailComponent } from './persona/persona-detail/persona-detail.component';

import { PreguntaModule } from './pregunta/pregunta.module';
import { PreguntaEditComponent } from './pregunta/pregunta-edit/pregunta-edit.component';
import { PreguntaCreateComponent } from './pregunta/pregunta-create/pregunta-create.component';
import { PreguntaDetailComponent } from './pregunta/pregunta-detail/pregunta-detail.component';

import { PreguntaAssessmentModule } from './pregunta-assessment/pregunta-assessment.module';
import { PreguntaAssessmentCreateComponent } from './pregunta-assessment/pregunta-assessment-create/pregunta-assessment-create.component';
import { PreguntaAssessmentEditComponent } from './pregunta-assessment/pregunta-assessment-edit/pregunta-assessment-edit.component';
import { PreguntaAssessmentDetailComponent } from './pregunta-assessment/pregunta-assessment-detail/pregunta-assessment-detail.component';

import { VideoModule } from './video/video.module';
import { VideoEditComponent } from './video/video-edit/video-edit.component';
import { VideoCreateComponent } from './video/video-create/video-create.component';
import { VideoDetailComponent } from './video/video-detail/video-detail.component';

//import { routing } from './app.routing';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {OWL_DATE_TIME_LOCALE , OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




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


//evaluacion-estudiantes
{
  path: 'evaluacion_estudiantes',
  component: EvaluacionEstudianteComponent,
  data: { title: 'evaluacion_estudiantes' }
},
{
  path: 'evaluacion_estudiante-details/:id',
  component: EvaluacionEstudianteDetailComponent,
  data: { title: 'evaluacion_estudiante Details' }
},
{
  path: 'evaluacion_estudiante-create',
  component: EvaluacionEstudianteCreateComponent,
  data: { title: 'Create evaluacion_estudiante' }
},
{
  path: 'evaluacion_estudiante-edit/:id',
  component: EvaluacionEstudianteEditComponent,
  data: { title: 'Edit evaluacion_estudiante' }
},


//PersonaS
{
  path: 'personas',
  component: PersonaComponent,
  data: { title: 'personas' }
},
{
  path: 'persona-details/:id',
  component: PersonaDetailComponent,
  data: { title: 'persona Details' }
},
{
  path: 'persona-create',
  component: PersonaCreateComponent,
  data: { title: 'Create persona' }
},
{
  path: 'persona-edit/:id',
  component: PersonaEditComponent,
  data: { title: 'Edit persona' }
},


  { path: '',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
//Preguntas

{
  path: 'preguntas',
  component: PreguntaComponent,
  data: { title: 'preguntas' }
},
{
  path: 'pregunta-details/:id',
  component: PreguntaDetailComponent,
  data: { title: 'pregunta Details' }
},
{
  path: 'pregunta-create',
  component: PreguntaCreateComponent,
  data: { title: 'Create pregunta' }
},
{
  path: 'pregunta-edit/:id',
  component: PreguntaEditComponent,
  data: { title: 'Edit pregunta' }
},
{ path: '',
  redirectTo: '/preguntas',
  pathMatch: 'full'
},

//pregunta_assessments
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
},

//videos

{
  path: 'videos',
  component: VideoComponent,
  data: { title: 'videos' }
},
{
  path: 'video-details/:id',
  component: VideoDetailComponent,
  data: { title: 'video Details' }
},
{
  path: 'video-create',
  component: VideoCreateComponent,
  data: { title: 'Create video' }
},
{
  path: 'video-edit/:id',
  component: VideoEditComponent,
  data: { title: 'Edit video' }
},
{ path: '',
  redirectTo: '/videos',
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
    AppNavbarComponent,
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
    EvaluacionEstudianteEditComponent,
    EvaluacionEstudianteCreateComponent,
    EvaluacionEstudianteDetailComponent,
    PersonaEditComponent,
    PersonaCreateComponent,
    PersonaDetailComponent,
    PreguntaEditComponent,
    PreguntaCreateComponent,
    PreguntaDetailComponent,
    PreguntaAssessmentEditComponent,
    PreguntaAssessmentCreateComponent,
    PreguntaAssessmentDetailComponent,
    VideoEditComponent,
    VideoCreateComponent,
    VideoDetailComponent

      ],
  imports: [


    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
             OwlNativeDateTimeModule,
  //  routing,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: 'en-SG'}] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
