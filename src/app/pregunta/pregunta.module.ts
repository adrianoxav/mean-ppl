import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { PreguntaDetailComponent } from './pregunta-detail/pregunta-detail.component';
import { PreguntaCreateComponent } from './pregunta-create/pregunta-create.component';
import { PreguntaEditComponent } from './pregunta-edit/pregunta-edit.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
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
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PreguntaComponent, PreguntaDetailComponent, PreguntaCreateComponent, PreguntaEditComponent]
})
export class PreguntaModule { }
