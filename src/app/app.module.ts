import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AuthGuard } from './auth/auth.guard';
import { DataTablesModule } from 'angular-datatables';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DataTableModule } from 'angular5-data-table';



import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { CursoComponent } from './curso/curso.component';
import { EvaluacionEstudianteComponent } from './evaluacion-estudiante/evaluacion-estudiante.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioRealizarComponent } from './inicio/inicio-realizar/inicio-realizar.component';

import { PersonaComponent } from './persona/persona.component';
import { PreguntaAssessmentComponent } from './pregunta-assessment/pregunta-assessment.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { VideoCursoComponent } from './video-curso/video-curso.component';
import { VideoComponent } from './video/video.component';
import { InicioComponent } from './inicio/inicio.component';
import { AssessmentsComponent } from './assessments/assessments.component';

//import { AssessmentsModule } from './assessments/assessments.module';
import { AssessmentCreateComponent } from './assessments/assessment-create/assessment-create.component';
import { AssessmentDetailComponent } from './assessments/assessment-detail/assessment-detail.component';
import { AssessmentEditComponent } from './assessments/assessment-edit/assessment-edit.component';




import { CuestionarioEditComponent } from './cuestionario/cuestionario-edit/cuestionario-edit.component';
import { CuestionarioCreateComponent } from './cuestionario/cuestionario-create/cuestionario-create.component';
import { CuestionarioDetailComponent } from './cuestionario/cuestionario-detail/cuestionario-detail.component';

import { CursoEditComponent } from './curso/curso-edit/curso-edit.component';
import { CursoCreateComponent } from './curso/curso-create/curso-create.component';
import { CursoDetailComponent } from './curso/curso-detail/curso-detail.component';

import { EstudianteEditComponent } from './estudiante/estudiante-edit/estudiante-edit.component';
import { EstudianteDetailComponent } from './estudiante/estudiante-detail/estudiante-detail.component';

import { EvaluacionEditComponent } from './evaluacion/evaluacion-edit/evaluacion-edit.component';
import { EvaluacionCreateComponent } from './evaluacion/evaluacion-create/evaluacion-create.component';
import { EvaluacionDetailComponent } from './evaluacion/evaluacion-detail/evaluacion-detail.component';
import { EstudianteDetailsComponent } from './evaluacion/evaluacion-detail/estudiante-details/estudiante-details.component';


import { EvaluacionEstudianteEditComponent } from './evaluacion-estudiante/evaluacion-estudiante-edit/evaluacion-estudiante-edit.component';
import { EvaluacionEstudianteCreateComponent } from './evaluacion-estudiante/evaluacion-estudiante-create/evaluacion-estudiante-create.component';
import { EvaluacionEstudianteDetailComponent } from './evaluacion-estudiante/evaluacion-estudiante-detail/evaluacion-estudiante-detail.component';
import { EstudianteDetalleComponent } from './assessments/estudiante-detalle/estudiante-detalle.component';

import { GrupoComponent } from './grupo/grupo.component';

import { MateriaComponent } from './materia/materia.component';

import { MateriaEditComponent } from './materia/materia-edit/materia-edit.component';
import { MateriaCreateComponent } from './materia/materia-create/materia-create.component';
import { MateriaDetailComponent } from './materia/materia-detail/materia-detail.component';


import { PersonaEditComponent } from './persona/persona-edit/persona-edit.component';
import { PersonaCreateComponent } from './persona/persona-create/persona-create.component';
import { PersonaDetailComponent } from './persona/persona-detail/persona-detail.component';

import { PreguntaEditComponent } from './pregunta/pregunta-edit/pregunta-edit.component';
import { PreguntaCreateComponent } from './pregunta/pregunta-create/pregunta-create.component';
import { PreguntaDetailComponent } from './pregunta/pregunta-detail/pregunta-detail.component';

import { PreguntaAssessmentCreateComponent } from './pregunta-assessment/pregunta-assessment-create/pregunta-assessment-create.component';
import { PreguntaAssessmentEditComponent } from './pregunta-assessment/pregunta-assessment-edit/pregunta-assessment-edit.component';
import { PreguntaAssessmentDetailComponent } from './pregunta-assessment/pregunta-assessment-detail/pregunta-assessment-detail.component';

import { VideoEditComponent } from './video/video-edit/video-edit.component';
import { VideoCreateComponent } from './video/video-create/video-create.component';
import { VideoDetailComponent } from './video/video-detail/video-detail.component';

//import { routing } from './app.routing';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import {OWL_DATE_TIME_LOCALE , OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupprofesorComponent } from './signupprofesor/signupprofesor.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';

import { UsuarioComponent } from './usuario/usuario.component';

import { UsuarioEditComponent } from './usuario/usuario-edit/usuario-edit.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from './usuario/usuario-detail/usuario-detail.component';
//import {ToasterModule, ToasterService} from 'angular5-toaster';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { JwtModule } from '@auth0/angular-jwt';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module'
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { SortService } from './sort.service';
import { ExcelService } from './excel.service';


const appRoutes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  {
      path: 'inicio-realizar/:id',
      component: InicioRealizarComponent,
      data: { title: 'Realizar Assessment' }
    },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Registrarse' }


  },
  {
    path: 'signupprofesor',
    component: SignupprofesorComponent,
    data: { title: 'Registrarse' }


  },
//profile

{
  path: 'profile',
  component: ProfileComponent,
  data: { title: 'profile' }
},
{
    path: 'forgotPassword',
    component: ForgotPasswordComponent
},
{
  path: 'profile-edit/:id',
  component: ProfileEditComponent,
  data: { title: 'Edit profile' }
},
  //USUARIOS
  {
    path: 'usuarios',
    component: UsuarioComponent,
    data: { title: 'usuarios' }
    },
  {
    path: 'usuario-details/:id',
    component: UsuarioDetailComponent,
    data: { title: 'usuario Details' }
  },
  {
    path: 'usuario-create',
    component: UsuarioCreateComponent,
    data: { title: 'Create usuario' }
  },
  {
    path: 'usuario-edit/:id',
    component: UsuarioEditComponent,
    data: { title: 'Edit usuario' }
  },
  {
    path: 'estudiante-detail/:id',
    component: EstudianteDetailComponent,
    data: { title: 'Estudiante detail' }
  },


////estudiante

{
  path: 'estudiante-details/:id',
  component: EstudianteDetailComponent,
  data: { title: 'estudiante Details' }
},
{
  path: 'estudiante-detalles/:id',
  component: EstudianteDetailsComponent,
  data: { title: 'estudiante Details' }
},
{
  path: 'estudiante-edit/:id',
  component: EstudianteEditComponent,
  data: { title: 'Edit estudiante' }
},
{
  path: 'estudiante-detail/:id',
  component: EstudianteDetailComponent,
  data: { title: 'Estudiante detail' }
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

//materia

//Cursos
{
  path: 'materias',
  component: MateriaComponent,
  data: { title: 'materias' }
},
{
  path: 'materia-details/:id',
  component: MateriaDetailComponent,
  data: { title: 'materia Details' }
},
{
  path: 'materia-create',
  component: MateriaCreateComponent,
  data: { title: 'Create materia' }
},
{
  path: 'materia-edit/:id',
  component: MateriaEditComponent,
  data: { title: 'Edit materia' }
},

//Evaluaciones
{
  path: 'estudiante',
  component: EstudianteComponent,
  data: { title: 'estudiante' }
},
{
  path: 'grupo',
  component: GrupoComponent,
  data: { title: 'grupo' }
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
    redirectTo: '/inicio',
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
{
  path: 'estudiante-detalle/:id',
  component: EstudianteDetalleComponent,
  data: { title: 'evaluacionestudiante Detalle' }
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
    ForgotPasswordComponent,
    AppNavbarComponent,
    AppComponent,
    UsuarioComponent,
    UsuarioDetailComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    EstudianteDetailComponent,
EstudianteDetailsComponent,
    EstudianteEditComponent,
    BookComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    CuestionarioComponent,
    CursoComponent,
    MateriaComponent,
    EvaluacionEstudianteComponent,
    EvaluacionComponent,
    EstudianteComponent,
    PersonaComponent,
    PreguntaAssessmentComponent,
    PreguntaComponent,
    VideoCursoComponent,
    VideoComponent,
    AssessmentsComponent,
    AssessmentCreateComponent,
    AssessmentEditComponent,
    AssessmentDetailComponent,
    EstudianteDetailComponent,
    InicioComponent,
    CuestionarioEditComponent,
    CuestionarioCreateComponent,
    CuestionarioDetailComponent,
    CursoEditComponent,
    EstudianteDetalleComponent,
    CursoCreateComponent,
    CursoDetailComponent,
    MateriaEditComponent,
    MateriaCreateComponent,
    MateriaDetailComponent,
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
    VideoDetailComponent,
    LoginComponent,
    SignupComponent,
    SignupprofesorComponent,
    UsuarioComponent,
    ProfileComponent,
    ProfileEditComponent,
    GrupoComponent,
    InicioRealizarComponent

      ],
  imports: [
    NgxPermissionsModule.forRoot(),

    DataTablesModule,
    SimpleNotificationsModule.forRoot(),
//ToasterModule,
    BrowserModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
             OwlNativeDateTimeModule,
             DataTableModule.forRoot(),

  //  routing,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ProfileModule
  ],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: 'en-SG',},AuthGuard,SortService,ExcelService] ,


  bootstrap: [AppComponent]
})
export class AppModule { }
