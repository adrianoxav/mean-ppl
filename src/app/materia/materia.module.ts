import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaDetailComponent } from './materia-detail/materia-detail.component';
import { MateriaEditComponent } from './materia-edit/materia-edit.component';
import { MateriaCreateComponent } from './materia-create/materia-create.component';
import { RouterModule, Routes } from '@angular/router';
import { MateriaComponent } from './materia/materia.component';


const appRoutes: Routes = [
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
  { path: '',
    redirectTo: '/materias',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MateriaDetailComponent, MateriaEditComponent, MateriaCreateComponent, MateriaComponent]
})
export class MateriaModule { }
