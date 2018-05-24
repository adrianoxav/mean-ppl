import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  video = {};

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }

  saveVideo() {
    this.http.post('http://localhost:3000/video', this.video)
      .subscribe(res => {
          let id = res['_id'];
          console.log(this.video);
          this.router.navigate(['/video-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
