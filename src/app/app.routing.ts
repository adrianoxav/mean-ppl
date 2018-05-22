import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { AssessmentCreateComponent } from './assessments/assessment-create/assessment-create.component';
import { AssessmentDetailComponent } from './assessments/assessment-detail/assessment-detail.component';
import { AssessmentEditComponent } from './assessments/assessment-edit/assessment-edit.component';
import { AssessmentsComponent } from './assessments/assessments.component';



const appRoutes: Routes = [

   { path: 'assessments', component: AssessmentsComponent, children: [
        {path: '', component: AssessmentsComponent},
        {path: 'crear', component: AssessmentCreateComponent, outlet: 'assessment-create'},
        {path: 'detalle:id', component: AssessmentDetailComponent, outlet: 'assessment-detail'},
        {path: 'editar:id', component: AssessmentEditComponent, outlet: 'assessment-edit'}
    ]  },
   {path: '', component: AppComponent, pathMatch: 'full'}
];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
