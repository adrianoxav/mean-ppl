import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluacionEstudianteComponent } from './evaluacion-estudiante/evaluacion-estudiante.component';
import { EvaluacionEstudianteEditComponent } from './evaluacion-estudiante-edit/evaluacion-estudiante-edit.component';
import { EvaluacionEstudianteDetailComponent } from './evaluacion-estudiante-detail/evaluacion-estudiante-detail.component';
import { EvaluacionEstudianteCreateComponent } from './evaluacion-estudiante-create/evaluacion-estudiante-create.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
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
  { path: '',
    redirectTo: '/evaluacion_estudiantes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EvaluacionEstudianteComponent, EvaluacionEstudianteEditComponent, EvaluacionEstudianteDetailComponent, EvaluacionEstudianteCreateComponent]
})
export class Evaluacion_estudianteModule { }
