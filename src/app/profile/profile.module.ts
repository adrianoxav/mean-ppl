import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'profile' }
  },

  {
    path: 'profile-edit/:id',
    component: ProfileEditComponent,
    data: { title: 'Edit profile' }
  },
  { path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
