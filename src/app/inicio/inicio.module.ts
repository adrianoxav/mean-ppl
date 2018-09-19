import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRealizarComponent } from './inicio-realizar/inicio-realizar.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'inicio-realizar/:id',
    component: InicioRealizarComponent,
    data: { title: 'Realizar Assessment' }
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicioRealizarComponent]
})
export class InicioModule { }
