import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { CursoCreateComponent } from './curso-create/curso-create.component';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';

import { NgxPermissionsModule } from 'ngx-permissions';

const appRoutes: Routes = [
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
  }
];


@NgModule({
  imports: [
    CommonModule,
    NgxPermissionsModule.forChild()

  ],
  declarations: [CursoDetailComponent, CursoEditComponent, CursoCreateComponent, CursoComponent]
})
export class CursoModule { }
