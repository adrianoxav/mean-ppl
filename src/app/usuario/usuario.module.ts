import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
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
  { path: '',
    redirectTo: '/usuarios',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioEditComponent]
})
export class UsuarioModule { }
