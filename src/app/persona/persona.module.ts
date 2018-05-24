import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from './persona/persona.component';
import { PersonaDetailComponent } from './persona-detail/persona-detail.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
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
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PersonaComponent, PersonaDetailComponent, PersonaCreateComponent, PersonaEditComponent]
})
export class PersonaModule { }
