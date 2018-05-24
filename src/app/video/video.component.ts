import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/video').subscribe(data => {
      console.log(data);
      this.videos = data;
    });
  }

}
