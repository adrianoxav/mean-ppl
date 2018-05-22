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
import { AssessmentCreateComponent } from './assessments/assessment-create/assessment-create.component';
import { AssessmentDetailComponent } from './assessments/assessment-detail/assessment-detail.component';
import { AssessmentEditComponent } from './assessments/assessment-edit/assessment-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { AssessmentsModule } from './assessments/assessments.module';
import { AssessmentsComponent } from './assessments/assessments.component';
//import { routing } from './app.routing';


const appRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  { path: 'assessments', component: AssessmentsComponent, children: [
       {path: '', component: AssessmentsComponent},
       {path: 'crear', component: AssessmentCreateComponent, outlet: 'assessment-create'},
       {path: 'detalle:id', component: AssessmentDetailComponent, outlet: 'assessment-detail'},
       {path: 'editar:id', component: AssessmentEditComponent, outlet: 'assessment-edit'}
   ]  },
  {path: '', component: AppComponent, pathMatch: 'full'},
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
    InicioComponent  ],
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
