import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
    this.http.get('http://www.aprendizajeactivo.espol.edu.ec:3000/video/'+id, httpOptions).subscribe(data => {
      this.video = data;
      console.log(this.video);
    });
  }

  updateVideo(id) {
  //    this.video.updated_date = Date.now();
    this.http.put('http://www.aprendizajeactivo.espol.edu.ec:3000/video/'+id, this.video, httpOptions)
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
