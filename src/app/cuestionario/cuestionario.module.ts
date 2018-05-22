import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuestionarioDetailComponent } from './cuestionario-detail/cuestionario-detail.component';
import { CuestionarioEditComponent } from './cuestionario-edit/cuestionario-edit.component';
import { CuestionarioCreateComponent } from './cuestionario-create/cuestionario-create.component';
import { CuestionarioComponent } from './cuestionario/cuestionario.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
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
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CuestionarioDetailComponent, CuestionarioEditComponent, CuestionarioCreateComponent, CuestionarioComponent]
})
export class CuestionarioModule { }
