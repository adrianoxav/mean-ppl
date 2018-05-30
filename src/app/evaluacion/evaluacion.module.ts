import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluacionDetailComponent } from './evaluacion-detail/evaluacion-detail.component';
import { EvaluacionCreateComponent } from './evaluacion-create/evaluacion-create.component';
import { EvaluacionEditComponent } from './evaluacion-edit/evaluacion-edit.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { RouterModule, Routes } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


const appRoutes: Routes = [
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
  }
];


@NgModule({
  imports: [
    CommonModule, OwlDateTimeModule,
         OwlNativeDateTimeModule
  ],
  declarations: [EvaluacionDetailComponent, EvaluacionCreateComponent, EvaluacionEditComponent, EvaluacionComponent]
})
export class EvaluacionModule { }
