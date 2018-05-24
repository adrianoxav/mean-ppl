import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.css']
})
export class VideoEditComponent implements OnInit {

  video: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getVideo(this.route.snapshot.params['id']);
  }

  getVideo(id) {
    this.http.get('http://localhost:3000/video/'+id).subscribe(data => {
      this.video = data;
      console.log(this.video);
    });
  }

  updateVideo(id) {
  //    this.video.updated_date = Date.now();
    this.http.put('http://localhost:3000/video/'+id, this.video)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/video-details', id]);
          console.log(this.video);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
