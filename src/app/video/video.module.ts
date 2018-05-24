import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { VideoCreateComponent } from './video-create/video-create.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: 'videos',
    component: VideoComponent,
    data: { title: 'videos' }
  },
  {
    path: 'video-details/:id',
    component: VideoDetailComponent,
    data: { title: 'video Details' }
  },
  {
    path: 'video-create',
    component: VideoCreateComponent,
    data: { title: 'Create video' }
  },
  {
    path: 'video-edit/:id',
    component: VideoEditComponent,
    data: { title: 'Edit video' }
  },
  { path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideoComponent, VideoEditComponent, VideoCreateComponent, VideoDetailComponent]
})
export class VideoModule { }
