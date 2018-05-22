import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignationEditComponent } from './assignation-edit/assignation-edit.component';
import { AssignationDetailComponent } from './assignation-detail/assignation-detail.component';
import { AssignationComponent } from './assignation/assignation.component';
import { AssignationCreateComponent } from './assignation-create/assignation-create.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
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
  { path: '',
    redirectTo: '/assignations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssignationEditComponent, AssignationDetailComponent, AssignationComponent, AssignationCreateComponent]
})
export class AssignationModule { }
