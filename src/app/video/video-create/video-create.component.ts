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
  materias={};
materia:any;
  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.http.get('http://www.ppl.espol.edu.ec:443/materia',httpOptions).subscribe(data => {
      console.log(data);
      this.materias = data;
    });
  }

  saveVideo() {
    this.http.post('http://www.ppl.espol.edu.ec:443/video', this.video, httpOptions)
      .subscribe(res => {
          let id = res['_id'];
          console.log(this.video);
          this.router.navigate(['/videos']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
