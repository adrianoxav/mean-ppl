import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignationEditComponent } from './assignation-edit/assignation-edit.component';
import { AssignationDetailComponent } from './assignation-detail/assignation-detail.component';
import { AssignationComponent } from './assignation/assignation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AssignationEditComponent, AssignationDetailComponent, AssignationComponent]
})
export class AssignationModule { }
