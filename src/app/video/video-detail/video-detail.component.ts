import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
      this.http.get('http://aprendizajeactivo.espol.edu.ec:443/video/'+id, httpOptions).subscribe(data => {
        this.video = data;
        console.log(this.video);
      });
    }

    deleteVideo(id) {
      this.http.delete('http://aprendizajeactivo.espol.edu.ec:443/video/'+id, httpOptions)
        .subscribe(res => {
            this.router.navigate(['/videos']);
            console.log(this.video);
          }, (err) => {
            console.log(err);
          }
        );
    }


}
