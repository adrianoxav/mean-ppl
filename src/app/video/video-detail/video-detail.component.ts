import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class VideoDetailComponent implements OnInit {

    video = {};

    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

    ngOnInit() {
      this.getVideoDetail(this.route.snapshot.params['id']);
    }

    getVideoDetail(id) {
      this.http.get('http://localhost:3000/video/'+id).subscribe(data => {
        this.video = data;
        console.log(this.video);
      });
    }

    deleteVideo(id) {
      this.http.delete('http://localhost:3000/video/'+id)
        .subscribe(res => {
            this.router.navigate(['/videos']);
            console.log(this.video);
          }, (err) => {
            console.log(err);
          }
        );
    }


}
