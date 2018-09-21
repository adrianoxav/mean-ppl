import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let httpOptions = {
  headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
};
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
    this.http.post('http://www.aprendizajeactivo.espol.edu.ec:80/video', this.video, httpOptions)
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
